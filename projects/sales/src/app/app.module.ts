import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LibHeaderModule } from 'lib-header';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    NgbModule,
    LibHeaderModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
