import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CONSTANTS } from './constants';
import {WeatherComponent} from './weather/weather.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: CONSTANTS.ROUTES.WEATHER.BASE,
    pathMatch: 'full'
  },
  {
    path: CONSTANTS.ROUTES.WEATHER.BASE,
    component: WeatherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
