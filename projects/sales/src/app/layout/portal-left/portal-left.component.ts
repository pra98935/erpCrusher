import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../../constants/constants';
import { LeftPanleModel } from '../../models/left-panel-model'

@Component({
  selector: 'app-portal-left',
  templateUrl: './portal-left.component.html',
  styleUrls: ['./portal-left.component.scss']
})
export class PortalLeftComponent implements OnInit {

  LeftPanleModelObj: LeftPanleModel = new LeftPanleModel();

  selectedItem: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.LeftPanleModelObj.adminAccountsUrl = Constants.ADMIN_ACCOUNTS_URL;
    this.LeftPanleModelObj.machineryUrl = Constants.MACHINERY_URL;

    this.adminAccountsMenu();
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

  onOptionsSelected(module:string){
    console.log("the selected value is " + module);
    this.router.navigate([module]);
  }

  adminAccountsMenu(){
    this.LeftPanleModelObj.adminAccountsMenu = [
      {
        parentName:'Dashboard',
        parentKey:'dashboard',
        childArray:[]
      },
      {
        parentName:'Master',
        parentKey:'master',
        childArray:[
          {
            childName: 'Account Group',
            childKey:'accountgroup',
            superChildArray:[
              {
                name:'Add',
                url:'add'
              },
              {
                name:'List',
                url:'list'
              },
              {
                name:'A/C Group Tree',
                url:''
              },
              {
                name:'setting',
                url:'setting'
              }
            ]
          },
          {
            childName: 'Account',
            childKey:'account',
            superChildArray:[
              {
                name:'Add',
                url:'add'
              },
              {
                name:'List',
                url:'list'
              },
              {
                name:'KYC List',
                url:''
              },
              {
                name:'Update A/C Information',
                url:'setting'
              },
              {
                name:'Opening Balance',
                url:'setting'
              },
              {
                name:'Unassigned A/C List',
                url:'setting'
              },
              {
                name:'Transfer To Next Year',
                url:'setting'
              },
              {
                name:'Account Merge ',
                url:'setting'
              },
              {
                name:'Account Used Detail ',
                url:'setting'
              },
              {
                name:'Balance Update',
                url:'setting'
              },
              {
                name:'Multi Group Update',
                url:'setting'
              },
              {
                name:'Multi GST No. Update',
                url:'setting'
              },
              {
                name:'Site wise Account List',
                url:'setting'
              },
              {
                name:'Delete Log List',
                url:'setting'
              },
              {
                name:'Unused Account List',
                url:'setting'
              },
              {
                name:'Delete Multiple A/C',
                url:'setting'
              }
            ]
          },
          {
            childName: 'TDS Configuration',
            childKey:'TDSConfiguration',
            superChildArray:[
              {
                name:'Add',
                url:'add'
              },
              {
                name:'List',
                url:'list'
              }
            ]
          },
          {
            childName: 'Budget',
            childKey:'budget',
            superChildArray:[
              {
                name:'Budget Group',
                url:'add'
              },
              {
                name:'Budget Account',
                url:'list'
              }
            ]
          },
          {
            childName: 'Branch / Division',
            childKey:'budget',
            superChildArray:[
              {
                name:'Add',
                url:'add'
              },
              {
                name:'List',
                url:'list'
              },
              {
                name:'Tree List',
                url:'list'
              },
              {
                name:'Division wise Opening',
                url:''
              }
            ]
          },
          {
            childName: 'Tax',
            childKey:'tax',
            superChildArray:[
              {
                name:'Add',
                url:'add'
              },
              {
                name:'GST Add',
                url:'list'
              },
              {
                name:'List',
                url:'list'
              }
            ]
          },
          {
            childName: 'Work Contract',
            childKey:'workContract',
            superChildArray:[
              {
                name:'Add',
                url:'add'
              },
              {
                name:'GST Add',
                url:'list'
              },
              {
                name:'List',
                url:'list'
              }
            ]
          },
          {
            childName: 'Account Group Schedule',
            childKey:'AccountGroupSchedule',
            superChildArray:[
              {
                name:'Add',
                url:'add'
              },
              {
                name:'List',
                url:'list'
              },
              {
                name:'Group Tree',
                url:'list'
              }
            ]
          },
          {
            childName: ' Account Schedule ',
            childKey:' AccountSchedule ',
            superChildArray:[
              {
                name:'Add',
                url:'add'
              },
              {
                name:'List',
                url:'list'
              },
              {
                name:'Assign A/C Schedule',
                url:'list'
              }
            ]
          },
          {
            childName: 'Account Create',
            childKey:'AccountCreate',
            superChildArray:[
              {
                name:'Employee Account',
                url:'add'
              }
            ]
          },
          {
            childName: 'Cheque Configuration',
            childKey:' ChequeConfiguration ',
            superChildArray:[
              {
                name:'Add',
                url:'add'
              },
              {
                name:'List',
                url:'list'
              }
            ]
          },
          {
            childName: 'Item Stock Manual ',
            childKey:'ItemStockManual',
            superChildArray:[
              {
                name:'Site wise ',
                url:'add'
              },
              {
                name:'Division wise ',
                url:'list'
              }
            ]
          },
          {
            childName: 'Financial Year',
            childKey:'FinancialYear',
            superChildArray:[]
          },
          {
            childName: 'Lock Month Financial',
            childKey:'LockMonthFinancial',
            superChildArray:[]
          },
          {
            childName: 'Opening Balance Lock ',
            childKey:'Opening Balance Lock',
            superChildArray:[]
          },
          {
            childName: 'Item Group',
            childKey:'ItemGroup',
            superChildArray:[
              {
                name:'Add',
                url:'add'
              },
              {
                name:'List',
                url:'list'
              },
              {
                name:'Group Tree',
                url:'list'
              }
            ]
          },
          {
            childName: 'Narration ',
            childKey:'Narration ',
            superChildArray:[
              {
                name:'Add',
                url:'add'
              },
              {
                name:'List',
                url:'list'
              },
            ]
          },
          {
            childName: 'Setting',
            childKey:'Setting',
            superChildArray:[
              {
                name:'Voucher Transaction',
                url:'add'
              },
              {
                name:'General Setting ',
                url:'list'
              },
              {
                name:'Documents',
                url:'list'
              },
            ]
          }

        ]
      },
      {
        parentName:'Transaction',
        parentKey:'transaction',
        childArray:[
          {
            childName: 'Account Group',
            childKey:'accountgroup',
            superChildArray:[
              {
                name:'Add',
                url:'add'
              },
              {
                name:'List',
                url:'list'
              }
            ]
          }
        ]
      },
      {
        parentName:'Reports',
        parentKey:'reports',
        childArray:[
          {
            childName: 'Account Group',
            childKey:'accountgroup',
            superChildArray:[
              {
                name:'Add',
                url:'add'
              },
              {
                name:'List',
                url:'list'
              }
            ]
          }
        ]
      }
    ]
  }

}
