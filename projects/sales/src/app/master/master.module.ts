import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { LibTableModule } from 'lib-table';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';


import { MasterRoutingModule } from './master-routing.module';
import { ListComponent } from './recipe/list/list.component';
import { AddComponent } from './recipe/add/add.component';
import { IgListComponent } from './item-group/ig-list/ig-list.component';
import { IgAddComponent } from './item-group/ig-add/ig-add.component';
import { ImAddComponent } from './item-master/im-add/im-add.component';
import { ImListComponent } from './item-master/im-list/im-list.component';
import { AccAddComponent } from './account/acc-add/acc-add.component';
import { AccListComponent } from './account/acc-list/acc-list.component';
import { AccCompanySiteComponent } from './account/acc-company-site/acc-company-site.component';
import { AccAddressComponent } from './account/acc-address/acc-address.component';
import { AccBankDetailComponent } from './account/acc-bank-detail/acc-bank-detail.component';
import { AccTaxDetailComponent } from './account/acc-tax-detail/acc-tax-detail.component';
import { AccContactDetailsComponent } from './account/acc-contact-details/acc-contact-details.component';
import { KycDetailsComponent } from './account/kyc-details/kyc-details.component';




@NgModule({
  declarations: [ListComponent, AddComponent, IgListComponent, IgAddComponent, ImAddComponent, ImListComponent, AccAddComponent, AccListComponent, AccCompanySiteComponent, AccAddressComponent, AccBankDetailComponent, AccTaxDetailComponent, AccContactDetailsComponent, KycDetailsComponent],
  imports: [
    CommonModule,
    MasterRoutingModule,
    MultiSelectModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    LibTableModule,
    CheckboxModule,
    TabViewModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    ToastModule
  ]
})
export class MasterModule { }
