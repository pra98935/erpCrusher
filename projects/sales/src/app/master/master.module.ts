import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { ListComponent } from './recipe/list/list.component';
import { AddComponent } from './recipe/add/add.component';
import { IgListComponent } from './item-group/ig-list/ig-list.component';
import { IgAddComponent } from './item-group/ig-add/ig-add.component';


@NgModule({
  declarations: [ListComponent, AddComponent, IgListComponent, IgAddComponent],
  imports: [
    CommonModule,
    MasterRoutingModule
  ]
})
export class MasterModule { }
