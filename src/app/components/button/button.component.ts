import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor(private apiService: ApiService, private appService: AppService) { }

  ngOnInit(): void {
  }

  selectCity(): void {
      this.apiService.getCityWeatherData();
  }
}
