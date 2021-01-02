import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportSearchPage } from './report-search/report-search.page';
import { ReportListPage } from './report-list/report-list.page';
import { ReportDetailPage } from './report-detail/report-detail.page';

const routes: Routes = [
  {
    path: 'report-search',
    component: ReportSearchPage,
  },
  {
    path: 'report-list',
    component: ReportListPage,
  },
  {
    path: 'report-detail',
    component: ReportDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
  entryComponents: []
})
export class ReportRoutingModule { }
