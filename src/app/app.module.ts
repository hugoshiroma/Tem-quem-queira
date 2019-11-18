import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { ChatComponent } from './components/chat/chat.component';
import { LocationComponent } from './screens/location/location.component';
import { NgxMaskModule } from 'ngx-mask';

import { AdressFormModule } from './components/adress-form/adress-form.module';
import { LoginModule } from './components/login/login.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LocationComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdressFormModule,
    BrowserAnimationsModule,
    LoginModule,
    HttpClientModule,

    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
