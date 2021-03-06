import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LibHeaderModule } from 'lib-header';
import { PanelMenuModule } from 'primeng/panelmenu';

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
    PanelMenuModule,
    LibHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
