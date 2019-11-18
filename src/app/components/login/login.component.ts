import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  abas: { preselecionado: boolean, selecionado: boolean, value: string }[] = [];
  animate = false;
  autenticado: boolean;
  cadastrado = false;
  user: User;

  loginForm: FormGroup;
  signInForm: FormGroup;

  @Output() blurEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() loginEvent: EventEmitter<User> = new EventEmitter<User>();

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.signInForm = this.fb.group({
      name: ['', Validators.required],
      cep: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', [Validators.required, email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required],
    });

    this.autenticado = this.authService.autenticado;
  }

  ngOnInit() {
    this.abas.push({ preselecionado: false, selecionado: true, value: 'LOGIN' });
    this.abas.push({ preselecionado: false, selecionado: false, value: 'CADASTRO' });

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

  aba(): string {
    return this.abas.find(x => x.selecionado).value;
  }

  signIn() {
    if (this.signInForm.controls['password'].value !== this.signInForm.controls['passwordConfirmation'].value) {
      this.signInForm.controls['password'].setErrors({unmatch: true});
      this.signInForm.controls['passwordConfirmation'].setErrors({unmatch: true});
      return;
    } else {
      this.signInForm.controls['password'].setErrors(null);
      this.signInForm.controls['passwordConfirmation'].setErrors(null);
    }
    console.log(localStorage.getItem('user'));
    if (this.signInForm.controls['username'].value === JSON.parse(localStorage.getItem('user')).username) {
      this.signInForm.controls['username'].setErrors({taken: true});
      return;
    } else {
      this.signInForm.controls['username'].setErrors(null);
    }
    if (!this.signInForm.valid) {
      this.signInForm.markAllAsTouched();
      return;
    }
    this.authService.signIn(this.signInForm.value);
    this.loginForm.controls['username'].setErrors(null);
    this.signInForm.reset();
    this.cadastrado = true;
    setTimeout(() => {
      this.cadastrado = false;
      this.selecionarAba('LOGIN');
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
      setTimeout(() => {
        this.blurEvent.emit('login');
      }, 2000);
    } else {
      this.loginForm.controls['username'].setErrors({invalid: true});
    }
  }
}
