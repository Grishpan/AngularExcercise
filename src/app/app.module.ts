import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WeatherComponent} from './weather/weather.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ButtonComponent } from './components/button/button.component';
import { ImgComponent } from './components/img/img.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {ApiService} from './services/api.service';
import {AppService} from './services/app.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    DropdownComponent,
    ButtonComponent,
    ImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [ApiService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
