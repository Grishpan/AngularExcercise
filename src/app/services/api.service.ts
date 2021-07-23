import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private API_KEY = '1890fcd579ac51bb12f42af3ceed6428';
  private selectedCityId: number;
  private cityData: any;
  public selectedCityIdDataSource = new Subject<any>();
  selectedCityData$ = this.selectedCityIdDataSource.asObservable();

  constructor() {
  }

  async getCityWeatherData(): Promise<any> {
    try {
      const url = `http://api.openweathermap.org/data/2.5/weather?id=${this.selectedCityId}&appid=${this.API_KEY}&units=metric`;
      const res = await fetch(url);
      this.cityData = await res.json();
      this.selectedCityIdDataSource.next(this.cityData);
    } catch (err) {
      console.log(err);
    }
  }

  setSelectedCity(cityId: number): void {
    this.selectedCityId = cityId;
  }
}
