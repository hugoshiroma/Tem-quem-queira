import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  abas: { preselecionado: boolean, selecionado: boolean, value: string }[] = [];
  animate = false;

  @Output() blurEvent: EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

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
}
