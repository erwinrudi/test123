import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightMenuPage } from './flight-menu/flight-menu.page';
import { CreateMenuPage } from './create-menu/create-menu.page';
import { ScheduleSearchPage } from './schedule-search/schedule-search.page';
import { FlightListPage } from './flight-list/flight-list.page';
import { CreateFlightSinglePage } from './create-flight-single/create-flight-single.page';
import { CreateFlightAdPage } from './create-flight-ad/create-flight-ad.page';
import { FlightDetailPage } from './flight-detail/flight-detail.page';
import { ScheduleFormPage } from './schedule-form/schedule-form.page';
import { PaxFormPage } from './pax-form/pax-form.page';
import { MovementFormPage } from './movement-form/movement-form.page';
import { AvioFormPage } from './avio-form/avio-form.page';

const routes: Routes = [
  {
    path: 'flight-menu',
    component: FlightMenuPage,
  },
  {
    path: 'create-menu',
    component: CreateMenuPage,
  },
  {
    path: 'schedule-search',
    component: ScheduleSearchPage,
  },
  {
    path: 'flight-list',
    component: FlightListPage,
  },
  {
    path: 'flight-detail',
    component: FlightDetailPage,
  },
  {
    path: 'create-single',
    component: CreateFlightSinglePage,
  },
  {
    path: 'create-ad',
    component: CreateFlightAdPage,
  },
  {
    path: 'schedule/:id',
    component: ScheduleFormPage,
  },
  {
    path: 'pax/:id',
    component: PaxFormPage,
  },
  {
    path: 'pax',
    component: PaxFormPage,
  },
  {
    path: 'movement/:id',
    component: MovementFormPage,
  },
  {
    path: 'movement',
    component: MovementFormPage,
  },
  {
    path: 'avio/:id',
    component: AvioFormPage,
  },
  {
    path: 'avio',
    component: AvioFormPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
  entryComponents: []
})
export class FlightActivityRoutingModule {}
