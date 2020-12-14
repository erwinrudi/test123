import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingMenuPage } from './billing-menu/billing-menu.page';
import { BillingSearchPage } from './billing-search/billing-search.page';
import { InvoiceSearchPage } from './invoice-search/invoice-search.page';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
  entryComponents: []
})
export class BillingRoutingModule {}
