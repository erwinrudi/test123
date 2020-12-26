import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BillingMenuPage } from './billing-menu/billing-menu.page';
import { BillingSearchPage } from './billing-search/billing-search.page';
import { InvoiceSearchPage } from './invoice-search/invoice-search.page';
import { BillingListPage } from './billing-list/billing-list.page';
import { BillingDetailPage } from './billing-detail/billing-detail.page';
import { InvoiceListPage } from './invoice-list/invoice-list.page';
import { InvoiceDetailPage } from './invoice-detail/invoice-detail.page';
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
    InvoiceSearchPage,
    BillingListPage,
    BillingDetailPage,
    InvoiceListPage,
    InvoiceDetailPage
  ]
})
export class BillingPageModule {}
