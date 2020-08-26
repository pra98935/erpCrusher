import { Component, OnInit } from '@angular/core';
import { ListRecipeModel } from '../../../models/recipe.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listRecipeModelObject: ListRecipeModel = new ListRecipeModel();
  basic: string = 'basic';
  
  constructor() { }

  ngOnInit(): void {
    this.productionTypeList();
    this.itemList();
    this.customerNameList();
    this.siteNameList();
    this.tableList();
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

  tableList(){
    this.listRecipeModelObject.tableArray = [
      {
        vin:'vin1',
        year:2011,
        brand:'maruti',
        color:'red'
      },
      {
        vin:'vin2',
        year:2011,
        brand:'maruti',
        color:'red'
      },
      {
        vin:'vin3',
        year:2011,
        brand:'maruti',
        color:'red'
      },
      {
        vin:'vin4',
        year:2011,
        brand:'maruti',
        color:'red'
      },
      {
        vin:'vin5',
        year:2011,
        brand:'maruti',
        color:'red'
      },
      {
        vin:'vin6',
        year:2011,
        brand:'maruti',
        color:'red'
      }
    ]

    this.listRecipeModelObject.tableCols = [
        { field: 'vin', header: 'Vin' },
        { field: 'year', header: 'Year' },
        { field: 'brand', header: 'Brand' },
        { field: 'color', header: 'Color' }
    ];
  }

}
