import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { email } from './../shared/email.validator';
import { AuthService } from './shared/auth.service';
import { User } from './shared/user.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  abas: { preselecionado: boolean, selecionado: boolean, value: string; hidden: boolean }[] = [];
  animate = false;
  autenticado: boolean;
  cadastrado = false;
  profiles: {value: string, viewValue: string}[] = [
    {value: 'D', viewValue: 'Doador'},
    {value: 'E', viewValue: 'Entidade'}
  ];
  user: User;
  donator = false;
  entity = false;
  hideWelcome = true;

  loginForm: FormGroup;
  signInForm: FormGroup;

  @Input() set _user(user: User) {
    if (this.abas.length === 0) {
      this.abas.push({ preselecionado: false, selecionado: true, value: 'LOGIN', hidden: true });
      this.abas.push({ preselecionado: false, selecionado: false, value: 'CADASTRO', hidden: true });
      this.abas.push({ preselecionado: false, selecionado: true, value: 'PERFIL', hidden: false });
    }
    if (user !== undefined && this.user !== null) {
      this.user = user;
      this.autenticado = true;
      this.authService.user = user;
      this.authService.autenticado = true;
      if (this.abas.length > 0) {
        this.abas[0].hidden = true;
        this.abas[1].hidden = true;
        this.abas[2].hidden = false;
        this.selecionarAba('PERFIL');
      }
    }
  }
  @Output() blurEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() loginEvent: EventEmitter<User> = new EventEmitter<User>();

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.signInForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      cep: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', [Validators.required, email]],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required],
    });

    this.autenticado = this.authService.autenticado;
  }

  ngOnInit() {
    if (this.abas.length === 0) {
      this.abas.push({ preselecionado: false, selecionado: true, value: 'LOGIN', hidden: false });
      this.abas.push({ preselecionado: false, selecionado: false, value: 'CADASTRO', hidden: false });
      this.abas.push({ preselecionado: false, selecionado: false, value: 'PERFIL', hidden: true });
    }

    setTimeout(() => {
      this.animate = true;
    }, 10);
  }

  close() {
    this.blurEvent.emit('login');
  }

  selecionarAba(aba: string) {
    this.abas.forEach(x => {
        x.selecionado = false;
    });
    this.abas.find(x => x.value === aba).selecionado = true;
  }

  abasUnhidden() {
    return this.abas.filter(x => !x.hidden);
  }

  aba(): string {
    return this.abas.find(x => x.selecionado).value;
  }

  signIn(username: string) {
    if (this.donator === false && this.entity === false) {
      return;
    }
    if (this.signInForm.controls['password'].value !== this.signInForm.controls['passwordConfirmation'].value) {
      this.signInForm.controls['password'].setErrors({unmatch: true});
      this.signInForm.controls['passwordConfirmation'].setErrors({unmatch: true});
      return;
    } else {
      this.signInForm.controls['password'].setErrors(null);
      this.signInForm.controls['passwordConfirmation'].setErrors(null);
    }
    console.log(this.signInForm.controls);
    if (localStorage.getItem('user') !== null) {
      if (this.signInForm.controls['username'].value === JSON.parse(localStorage.getItem('user')).username) {
      this.signInForm.controls['username'].setErrors({taken: true});
      return;
      } else {
        this.signInForm.controls['username'].setErrors(null);
      }
    }
    if (!this.signInForm.valid) {
      this.signInForm.markAllAsTouched();
      return;
    }
    this.authService.signIn(this.signInForm.value);
    this.loginForm.controls['username'].setErrors(null);
    this.cadastrado = true;
    setTimeout(() => {
      this.cadastrado = false;
      this.selecionarAba('LOGIN');
      this.loginForm.controls['username'].setValue(this.signInForm.controls['username'].value);
      this.loginForm.controls['password'].setValue(this.signInForm.controls['password'].value);
      this.signInForm.reset();
      this.entity = false;
      this.donator = false;
    }, 4500);
  }

  login() {
    if (!this.loginForm.valid) {
      this.signInForm.markAllAsTouched();
      return;
    }
    this.authService.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value);
    if (this.authService.autenticado) {
      this.user = this.authService.user;
      console.log(this.user);
      this.loginEvent.emit(this.user);
      this.autenticado = true;
      this.hideWelcome = false;
      setTimeout(() => {
        this.blurEvent.emit('login');
        this.abas[0].hidden = true;
        this.abas[1].hidden = true;
        this.abas[2].hidden = false;
        this.selecionarAba('PERFIL');
        this.hideWelcome = true;
      }, 2000);
    } else {
      this.loginForm.controls['username'].setErrors({invalid: true});
    }
  }

  logOff() {
    this.authService.autenticado = false;
    this.authService.user = null;
    this.autenticado = false;
    this.user = null;
    this.abas[0].hidden = false;
    this.abas[1].hidden = false;
    this.abas[2].hidden = true;
    this.selecionarAba('LOGIN');
  }

  chooseProfile(DoE: string) {
    switch (DoE) {
      case 'entity':
        this.donator = false;
        this.entity = !this.entity;
        break;
      case 'donator':
        this.donator = !this.donator;
        this.entity = false;
        break;
    }
  }
}
