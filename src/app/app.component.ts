import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { User } from './components/login/shared/user.model';
import { LoginComponent } from './components/login/login.component';

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
  inverted = false;

  @ViewChild('login', { static: false }) public login: LoginComponent;

  @HostListener('window:scroll', []) onScroll(): void {
    if (window.pageYOffset > 575) {
      this.inverted = true;
    } else {
      this.inverted = false;
    }
  }

  constructor(private router: Router) {
    if (localStorage.getItem('user') !== null && localStorage.getItem('user') !== undefined) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.autenticado = true;
    }
  }

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

  handleLogin(log: string, user?: User) {
    switch (log) {
      case 'login':
        this.autenticado = true;
        if (user !== undefined && user !== null) {
          this.user = user;
        }
        this.showLoginForm = true;
        break;
      case 'logoff':
        this.autenticado = false;
        this.user = null;
        this.login.logOff();
    }
  }

  openChat() {
    
  }
}
