import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CreateFlightAdPage } from './create-flight-ad/create-flight-ad.page';
import { CreateFlightSinglePage } from './create-flight-single/create-flight-single.page';
import { CreateMenuPage } from './create-menu/create-menu.page';
import { FlightListPage } from './flight-list/flight-list.page';
import { FlightMenuPage } from './flight-menu/flight-menu.page';
import { ScheduleSearchPage } from './schedule-search/schedule-search.page';
import { FlightDetailPage } from './flight-detail/flight-detail.page';
import { ScheduleFormPage } from './schedule-form/schedule-form.page';
import { PaxFormPage } from './pax-form/pax-form.page';
import { AvioFormPage } from './avio-form/avio-form.page';
import { MovementFormPage } from './movement-form/movement-form.page';

import { FlightActivityRoutingModule } from './flight-activity-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlightActivityRoutingModule
  ],
  declarations: [
    FlightMenuPage,
    CreateMenuPage,
    ScheduleSearchPage,
    FlightListPage,
    CreateFlightSinglePage,
    CreateFlightAdPage,
    FlightDetailPage,
    ScheduleFormPage,
    PaxFormPage,
    AvioFormPage,
    MovementFormPage
  ]
})
export class FlightActivityPageModule {}
