import { NgModule } from '@angular/core';
import { LibTableComponent } from './lib-table.component';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common'; 
import * as XLSX from 'xlsx';
import {ButtonModule} from 'primeng/button';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';

import { CrudComponent } from './crud/crud.component';
import { ExpandComponent } from './expand/expand.component';
import { BasicComponent } from './basic/basic.component';





@NgModule({
  declarations: [LibTableComponent, CrudComponent, ExpandComponent, BasicComponent],
  imports: [
    TableModule,
    CommonModule,
    ButtonModule,
    ConfirmDialogModule,
    //FormsModule
  ],
  exports: [LibTableComponent]
})
export class LibTableModule { }
