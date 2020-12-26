import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingMenuPage } from './billing-menu/billing-menu.page';
import { BillingSearchPage } from './billing-search/billing-search.page';

import { BillingListPage } from './billing-list/billing-list.page';
import { BillingDetailPage } from './billing-detail/billing-detail.page';

import { InvoiceSearchPage } from './invoice-search/invoice-search.page';
import { InvoiceListPage } from './invoice-list/invoice-list.page';


const routes: Routes = [
  {
    path: 'billing-menu',
    component: BillingMenuPage,
  },
  {
    path: 'billing-search',
    component: BillingSearchPage,
  },
  {
    path: 'billing-detail',
    component: BillingDetailPage,
  },
  {
    path: 'billing-list',
    component: BillingListPage,
  },
  {
    path: 'invoice-search',
    component: InvoiceSearchPage,
  },
  {
    path: 'invoice-list',
    component: InvoiceListPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
  entryComponents: []
})
export class BillingRoutingModule { }
