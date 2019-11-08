import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { LocationComponent } from './screens/location/location.component';
import { HomeComponent } from './screens/home/home.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'app-chat',
    component: ChatComponent,
    data: { title: 'Chat' }
  },
  {
    path: 'welcome',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'location',
    component: LocationComponent,
    data: { title: 'Location' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
