import { Component, OnInit } from '@angular/core';
import { ListRecipeModel } from '../../../models/recipe.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listRecipeModelObject: ListRecipeModel = new ListRecipeModel();

  constructor() { }

  ngOnInit(): void {
    this.productionTypeList();
    this.itemList();
    this.customerNameList();
    this.siteNameList();
  }

  productionTypeList(){
    this.listRecipeModelObject.productionTypeArray = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
  }

  itemList(){
    this.listRecipeModelObject.itemArray = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
  }

  customerNameList(){
    this.listRecipeModelObject.customerNameArray = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
  }

  siteNameList(){
    this.listRecipeModelObject.siteNameArray = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
  }

}
