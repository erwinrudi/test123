import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';
import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { HomeService } from './home.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    NgxPermissionsModule.forRoot(),
  ],
  declarations: [HomePage],
  providers: [
    HomeService
  ]
})
export class HomePageModule { }
