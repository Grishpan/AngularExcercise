import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() cities;
  public cityData;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    console.log(this.cities);
  }

  setCity($event): void {
    this.apiService.setSelectedCity($event.target.value);
  }
}
