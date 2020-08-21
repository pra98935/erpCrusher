import { NgModule } from '@angular/core';
import { LibTableComponent } from './lib-table.component';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common'; 
import * as XLSX from 'xlsx';
import {ButtonModule} from 'primeng/button';





@NgModule({
  declarations: [LibTableComponent],
  imports: [
    TableModule,
    CommonModule,
    ButtonModule
  ],
  exports: [LibTableComponent]
})
export class LibTableModule { }
