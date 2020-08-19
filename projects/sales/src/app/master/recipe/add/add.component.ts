import { Component, OnInit } from '@angular/core';
import { SelectItem, SelectItemGroup } from 'primeng/api';
import { AddRecipeModel } from '../../../models/add-recipe.model';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addRecipeModelObject: AddRecipeModel = new AddRecipeModel();
  constructor() { }

  ngOnInit(): void {
    this.unitList();
    this.productionTypeList();
    this.itemList();
    this.customerNameList();
    this.gstList();
    this.siteNameList();
  }

  unitList(){
    this.addRecipeModelObject.unitArray = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
  }

  productionTypeList(){
    this.addRecipeModelObject.productionTypeArray = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
  }

  itemList(){
    this.addRecipeModelObject.itemArray = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
  }

  customerNameList(){
    this.addRecipeModelObject.customerNameArray = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
  }

  gstList(){
    this.addRecipeModelObject.gstArray = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
  }

  siteNameList(){
    this.addRecipeModelObject.siteNameArray = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
  }

}
