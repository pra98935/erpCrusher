import { Component, OnInit } from '@angular/core';
import {addressDetailsModel} from '../../../models/master/account.model';

@Component({
  selector: 'app-acc-address',
  templateUrl: './acc-address.component.html',
  styleUrls: ['./acc-address.component.scss']
})
export class AccAddressComponent implements OnInit {
  addressDetailsModelObj: addressDetailsModel = new addressDetailsModel();
  constructor() { }

  ngOnInit(): void {
    this.cityList()
  }

  cityList(){
    this.addressDetailsModelObj.cityArray = [
      {label: 'New York', value: 'NY'},
      {label: 'Rome', value: 'RM'},
      {label: 'London', value: 'LDN'},
      {label: 'Istanbul', value: 'IST'},
      {label: 'Paris', value: 'PRS'}
  ];
  }

}
