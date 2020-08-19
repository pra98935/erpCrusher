import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

import { MasterRoutingModule } from './master-routing.module';
import { ListComponent } from './recipe/list/list.component';
import { AddComponent } from './recipe/add/add.component';
import { IgListComponent } from './item-group/ig-list/ig-list.component';
import { IgAddComponent } from './item-group/ig-add/ig-add.component';




@NgModule({
  declarations: [ListComponent, AddComponent, IgListComponent, IgAddComponent],
  imports: [
    CommonModule,
    MasterRoutingModule,
    MultiSelectModule,
    FormsModule,
    DropdownModule
  ]
})
export class MasterModule { }
