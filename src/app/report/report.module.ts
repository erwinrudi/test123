import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReportService } from './report.service';

import { ReportSearchPage } from './report-search/report-search.page';
import { ReportListPage } from './report-list/report-list.page';

import { ReportRoutingModule } from './report-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReportRoutingModule
  ],
  declarations: [
    ReportSearchPage,
    ReportListPage
  ],
  providers: [
    ReportService
  ]
})
export class ReportPageModule {}
