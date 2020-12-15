import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingMenuPage } from './billing-menu/billing-menu.page';
import { BillingSearchPage } from './billing-search/billing-search.page';
import { InvoiceSearchPage } from './invoice-search/invoice-search.page';
import { BillingListPage } from './billing-list/billing-list.page';

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
    path: 'invoice-search',
    component: InvoiceSearchPage,
  },
  {
    path: 'billing-list',
    component: BillingListPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
  entryComponents: []
})
export class BillingRoutingModule {}
