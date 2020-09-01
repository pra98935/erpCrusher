import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './recipe/add/add.component';
import { ListComponent } from './recipe/list/list.component';
import { IgAddComponent } from './item-group/ig-add/ig-add.component';
import { IgListComponent } from './item-group/ig-list/ig-list.component';
import { Constants } from '../constants/constants';
import { ImListComponent } from './item-master/im-list/im-list.component';
import { ImAddComponent } from './item-master/im-add/im-add.component';
import {AccAddComponent} from './account/acc-add/acc-add.component';
import {AccListComponent} from './account/acc-list/acc-list.component';

const routes: Routes = [
  {
    path: Constants.RECIPE + '/' + Constants.ADD,
    component: AddComponent
  },
  {
    path: Constants.RECIPE + '/' + Constants.LIST,
    component: ListComponent
  },
  {
    path: Constants.ITEM_GROUP + '/' + Constants.ADD,
    component: IgAddComponent
  },
  {
    path: Constants.ITEM_GROUP + '/' + Constants.LIST,
    component: IgListComponent
  },
  {
    path: Constants.ITEM_MASTER + '/' + Constants.ADD,
    component: ImAddComponent
  },
  {
    path: Constants.ITEM_MASTER + '/' + Constants.LIST,
    component: ImListComponent
  },
  {
    path: Constants.ACCOUNT + '/' + Constants.ADD,
    component: AccAddComponent
  },
  {
    path: Constants.ACCOUNT + '/' + Constants.LIST,
    component: AccListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
