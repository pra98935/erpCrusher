import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './recipe/add/add.component';
import { ListComponent } from './recipe/list/list.component';
import { IgAddComponent } from './item-group/ig-add/ig-add.component';
import { IgListComponent } from './item-group/ig-list/ig-list.component';
import { Constants } from '../constants/constants';

const routes: Routes = [
  {
    path: Constants.RECIPE+'/'+Constants.ADD,
    component: AddComponent
  },
  {
    path: Constants.RECIPE+'/'+Constants.LIST,
    component: ListComponent
  },
  {
    path: Constants.ITEM_GROUP+'/'+Constants.ADD,
    component: IgAddComponent
  },
  {
    path: Constants.ITEM_GROUP+'/'+Constants.LIST,
    component: IgListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
