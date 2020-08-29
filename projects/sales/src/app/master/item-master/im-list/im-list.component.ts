import { Component, OnInit } from '@angular/core';
import {ItemMasterSearchModel } from '../../../models/item-master.model';

@Component({
  selector: 'app-im-list',
  templateUrl: './im-list.component.html',
  styleUrls: ['./im-list.component.scss']
})
export class ImListComponent implements OnInit {
  itemMasterSearchModelObj: ItemMasterSearchModel = new ItemMasterSearchModel();

  constructor() { }

  ngOnInit(): void {
    this.itemGroupList();
    this.itemNameList();
    this.gstist();
    this.usersList();
  }

  itemGroupList(){
    this.itemMasterSearchModelObj.itemGroupArray = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
  }

  itemNameList(){
    this.itemMasterSearchModelObj.itemNameArray = [
      {label: 'New York', value: 'NY'},
      {label: 'Rome', value: 'RM'},
      {label: 'London', value: 'LDN'},
      {label: 'Istanbul', value: 'IST'},
      {label: 'Paris', value: 'PRS'}
    ]
  }
  
  gstist(){
    this.itemMasterSearchModelObj.gstArray=[
      {
        label: 'CGST', 
        value: 'cgst'
      },
      {
        label: 'SGST', 
        value: 'sgst'
      },
      {
        label: 'IGST', 
        value: 'igst'
      }
    ]
  }

  usersList(){
    this.itemMasterSearchModelObj.userByArray=[
      {
        label: 'Swapnil', 
        value: 'swapnil'
      },
      {
        label: 'Aayush', 
        value: 'aayush'
      },
      {
        label: 'Prashant', 
        value: 'prashant'
      }
    ]
  }

}
