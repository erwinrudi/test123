import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BillingMenuPage } from './billing-menu/billing-menu.page';
import { BillingSearchPage } from './billing-search/billing-search.page';
import { InvoiceSearchPage } from './invoice-search/invoice-search.page';

import { BillingRoutingModule } from './billing-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BillingRoutingModule
  ],
  declarations: [
    BillingMenuPage,
    BillingSearchPage,
    InvoiceSearchPage
  ]
})
export class BillingPageModule {}
