import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { LibTableModule } from 'lib-table';
import {CheckboxModule} from 'primeng/checkbox';

import { MasterRoutingModule } from './master-routing.module';
import { ListComponent } from './recipe/list/list.component';
import { AddComponent } from './recipe/add/add.component';
import { IgListComponent } from './item-group/ig-list/ig-list.component';
import { IgAddComponent } from './item-group/ig-add/ig-add.component';
import { ImAddComponent } from './item-master/im-add/im-add.component';
import { ImListComponent } from './item-master/im-list/im-list.component';




@NgModule({
  declarations: [ListComponent, AddComponent, IgListComponent, IgAddComponent, ImAddComponent, ImListComponent],
  imports: [
    CommonModule,
    MasterRoutingModule,
    MultiSelectModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    LibTableModule,
    CheckboxModule
  ]
})
export class MasterModule { }
