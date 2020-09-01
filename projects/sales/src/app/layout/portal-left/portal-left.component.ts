import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../../constants/constants';
import { LeftPanleModel } from '../../models/left-panel-model';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-portal-left',
  templateUrl: './portal-left.component.html',
  styleUrls: ['./portal-left.component.scss']
})
export class PortalLeftComponent implements OnInit {

  LeftPanleModelObj: LeftPanleModel = new LeftPanleModel();

  selectedItem: string;

  items: MenuItem[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.LeftPanleModelObj.adminAccountsUrl = Constants.ADMIN_ACCOUNTS_URL;
    this.LeftPanleModelObj.machineryUrl = Constants.MACHINERY_URL;

    this.leftPanelList();
  }

    /**
   *
   * @param event
   * @param module
   */
  listClick(event, module) {
    this.selectedItem = module;
    this.router.navigate([module]);
  }

  onOptionsSelected(module: string){
    console.log('the selected value is ' + module);
    this.router.navigate([module]);
  }

  leftPanelList(){
    this.items = [
      {
          label: 'Dashboard',
          items: [{
                  label: 'Summary', 
              }
          ]
      },
      {
          label: 'Master',
          items: [
              {
                label: 'Recipe', 
                items: [
                    {
                        label: 'Add', 
                        command: (event) => { this.router.navigate([Constants.RECIPE + '/' + Constants.ADD]) }
                    },
                    {
                        label: 'List',
                        command: (event) => { this.router.navigate([Constants.RECIPE + '/' + Constants.LIST]) }
                    }
                ]
              },
              {
                label: 'Item Group', 
                items: [
                    {
                        label: 'Add', 
                        command: (event) => { this.router.navigate([Constants.ITEM_GROUP + '/' + Constants.ADD]) }
                    },
                    {
                        label: 'List',
                        command: (event) => { this.router.navigate([Constants.ITEM_GROUP + '/' + Constants.LIST]) }
                    }
                ]
              },
              {
                label: 'Item Master', 
                items: [
                    {
                        label: 'Add', 
                        command: (event) => { this.router.navigate([Constants.ITEM_MASTER + '/' + Constants.ADD]) }
                    },
                    {
                        label: 'List',
                        command: (event) => { this.router.navigate([Constants.ITEM_MASTER + '/' + Constants.LIST]) }
                    }
                ]
              },
              {
                label: 'Account', 
                items: [
                    {
                        label: 'Add', 
                        command: (event) => { this.router.navigate([Constants.ACCOUNT + '/' + Constants.ADD]) }
                    },
                    {
                        label: 'List',
                        command: (event) => { this.router.navigate([Constants.ACCOUNT + '/' + Constants.LIST]) }
                    }
                ]
              }
          ]
      }
  ];
  }

}
