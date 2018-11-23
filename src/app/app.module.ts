import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { Code404Component } from './code404/code404.component';
import { BuyerlistComponent } from './buyerlist/buyerlist.component';
import { SellerlistComponent } from './sellerlist/sellerlist.component';
import { ConsultComponent } from './consult/consult.component';
import {PermissionGuard} from './guard/permission.guard';
import {FocusGuard} from './guard/focus.component';
import {StockResolve} from './guard/stock.resolve';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StockComponent,
    Code404Component,
    BuyerlistComponent,
    SellerlistComponent,
    ConsultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PermissionGuard, FocusGuard, StockResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
