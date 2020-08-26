import { Component, OnInit } from '@angular/core';
import { ListItemGroupModel } from '../../../models/item-group.model';

@Component({
  selector: 'app-ig-list',
  templateUrl: './ig-list.component.html',
  styleUrls: ['./ig-list.component.scss']
})
export class IgListComponent implements OnInit {

  listItemGroupModel: ListItemGroupModel = new ListItemGroupModel();
  constructor() { }

  ngOnInit(): void {
    this.itemTypeList();
    this.purchaseAccountList();
  }

  itemTypeList(){
    this.listItemGroupModel.itemTypeArray = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
  }

  purchaseAccountList(){
    this.listItemGroupModel.purchaseAccountArray = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
  }


}
