import { Component, OnInit } from '@angular/core';
import {AddAccountModel} from '../../../models/master/account.model';

@Component({
  selector: 'app-acc-add',
  templateUrl: './acc-add.component.html',
  styleUrls: ['./acc-add.component.scss']
})
export class AccAddComponent implements OnInit {
  addAccountModelObj: AddAccountModel = new AddAccountModel();
  constructor() { }

  ngOnInit(): void {
    this.transferTypeList();
    this.groupArrayList();
  }

  transferTypeList(){
    this.addAccountModelObj.transferTypeArray = [
        {label: 'DR', value: 'dr'},
        {label: 'CR', value: 'cr'}
    ];
  }

  groupArrayList(){
    this.addAccountModelObj.accountGrpArray = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
  }

}
