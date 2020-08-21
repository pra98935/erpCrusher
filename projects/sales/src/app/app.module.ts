import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { LibHeaderModule } from 'lib-header';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelMenuModule } from 'primeng/panelmenu';
import { LibTableModule } from 'lib-table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortalLeftComponent } from './layout/portal-left/portal-left.component';
import { PortalTopComponent } from './layout/portal-top/portal-top.component';

@NgModule({
  declarations: [
    AppComponent,
    PortalLeftComponent,
    PortalTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibHeaderModule,
    //LibTableModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
