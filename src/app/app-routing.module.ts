import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  {
    path: 'app-chat',
    component: ChatComponent,
    data: { title: 'Home' }
  },
  {
    path: 'welcome',
    component: AppComponent,
    data: { title: 'Home' }
  },
  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
