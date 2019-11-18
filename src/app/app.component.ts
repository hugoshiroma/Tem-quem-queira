import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { User } from './components/login/shared/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  url = '';
  showLoginForm = false;
  autenticado = false;
  user: User;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe()
      .subscribe((navEnd: NavigationEnd) => {
        if (navEnd instanceof NavigationEnd) {
          this.url = navEnd.urlAfterRedirects;
        }
      });
  }

  handleForm(form: string) {
    switch (form) {
      case 'login':
        this.showLoginForm = !this.showLoginForm;
        break;
    }
  }

  handleLogin(user: User) {
    this.autenticado = true;
    this.user = user;
  }

  openChat() {
    
  }
}
