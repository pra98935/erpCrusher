import { Component, OnInit } from '@angular/core';
import {bankDetailsModel} from '../../../models/master/account.model';

@Component({
  selector: 'app-acc-bank-detail',
  templateUrl: './acc-bank-detail.component.html',
  styleUrls: ['./acc-bank-detail.component.scss']
})
export class AccBankDetailComponent implements OnInit {
  bankDetailsModelObj: bankDetailsModel = new bankDetailsModel();
  constructor() { }

  ngOnInit(): void {
    this.calculationList();
    this.daysList();
    this.transferTypeList();
  }

  calculationList(){
    this.bankDetailsModelObj.calculationTypeArray = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
  }

  daysList(){
    this.bankDetailsModelObj.daysArray = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
  }

  transferTypeList(){
    this.bankDetailsModelObj.transferTypeArray = [
        {label: 'DR', value: 'dr'},
        {label: 'CR', value: 'cr'}
    ];
  }

}
