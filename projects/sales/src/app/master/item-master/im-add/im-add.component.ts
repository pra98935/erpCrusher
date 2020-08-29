import { Component, OnInit } from '@angular/core';
import {AddItemMasterModel, commonModel} from '../../../models/item-master.model';


@Component({
  selector: 'app-im-add',
  templateUrl: './im-add.component.html',
  styleUrls: ['./im-add.component.scss']
})
export class ImAddComponent implements OnInit {
  addItemMasterModelObj: AddItemMasterModel = new AddItemMasterModel();
  commonModelObj: commonModel = new commonModel();
  
  constructor() { }

  ngOnInit(): void {
    this.commonModelObj.ownState='mp';
    this.addItemMasterModelObj.selectedStateName='mp';
    
    this.itemGroupList();
    this.stateList();
    this.taxList();
  }

  itemGroupList(){
    this.addItemMasterModelObj.itemGroupArray = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
  }

  stateList(){
    this.addItemMasterModelObj.stateNameArray = [
        {label: 'MP', value: 'mp'},
        {label: 'AP', value: 'ap'},
        {label: 'HP', value: 'hp'},
    ];
  }

  taxList(){
    this.addItemMasterModelObj.ownStateTaxArray=[
      {
        label: 'CGST', 
        value: 'cgst'
      },
      {
        label: 'SGST', 
        value: 'sgst'
      }
    ]

    this.addItemMasterModelObj.otherStateTaxArray=[
      {
        label: 'IGST', 
        value: 'igst'
      }
    ]
  }

}
