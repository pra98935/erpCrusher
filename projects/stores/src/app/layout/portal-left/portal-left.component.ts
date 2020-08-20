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

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.LeftPanleModelObj.adminAccountsUrl = Constants.ADMIN_ACCOUNTS_URL;
    this.LeftPanleModelObj.machineryUrl = Constants.MACHINERY_URL;
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

  

}
