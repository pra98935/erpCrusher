import { Component, OnInit } from '@angular/core';
import { AddItemGroupModel } from '../../../models/item-group.model';

@Component({
  selector: 'app-ig-add',
  templateUrl: './ig-add.component.html',
  styleUrls: ['./ig-add.component.scss']
})
export class IgAddComponent implements OnInit {

  addItemGroupModelObj: AddItemGroupModel = new AddItemGroupModel();
  constructor() { }

  ngOnInit(): void {
    this.itemTypeList();
    this.purchaseAccountList();
    this.gstTaxList();
    this.primaryGroupList();
  }

  itemTypeList(){
    this.addItemGroupModelObj.itemTypeArray = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
  }

  purchaseAccountList(){
    this.addItemGroupModelObj.purchaseAccountArray = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
  }

  gstTaxList(){
    this.addItemGroupModelObj.GSTArray = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
  }

  primaryGroupList(){
    this.addItemGroupModelObj.primaryGroupArray = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
  }

}
