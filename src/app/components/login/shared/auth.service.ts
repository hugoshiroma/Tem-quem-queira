import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable()
export class AuthService {

  autenticado = false;
  user: User;

  signIn(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  login(user: string, password: string) {
    if (localStorage.getItem('user') === null) {
      this.autenticado = false;
    } else {
      if (JSON.parse(localStorage.getItem('user')).username === user &&
      JSON.parse(localStorage.getItem('user')).password === password) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.autenticado = true;
      }
    }
  }

  constructor() { }
}
