import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  url = '';
  showLoginForm = false;

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
}
