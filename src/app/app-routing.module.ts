import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GeneralService } from './general.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'flight',
    loadChildren: './flight-activity/flight-activity.module#FlightActivityPageModule'
  },
  {
    path: 'billing',
    loadChildren: './billing/billing.module#BillingPageModule'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [
    GeneralService
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
