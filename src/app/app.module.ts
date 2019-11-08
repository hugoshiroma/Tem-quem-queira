import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { ChatComponent } from './components/chat/chat.component';
import { LocationComponent } from './screens/location/location.component';
import { AdressFormComponent } from './components/adress-form/adress-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LocationComponent,
    AdressFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
