import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportSearchPage } from './report-search/report-search.page';

const routes: Routes = [
  {
    path: 'report-search',
    component: ReportSearchPage,
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
  entryComponents: []
})
export class ReportRoutingModule { }
