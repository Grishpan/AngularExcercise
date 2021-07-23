import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {HttpClient} from '@angular/common/http';
import data from '../../assets/citylist.json';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  public cities: any;
  public selectedCityData: any;

  constructor(private httpClient: HttpClient, private apiService: ApiService) {
    apiService.selectedCityData$.subscribe(selectedCityData => {
      this.selectedCityData = selectedCityData;
      console.log(this.selectedCityData);
    });
  }

  ngOnInit(): void {
    this.getCities();
  }


  getCities(): any {
    this.cities = data;
  }

  getImgSrc(src: string): string {
    return `http://openweathermap.org/img/wn/${src}@2x.png`;
  }
}
