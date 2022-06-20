import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstPageRoutingModule } from './first-page-routing.module';
import { PageComponent } from './page/page.component';
import { RegistrationComponent } from './registration/registration.component';
import { EntranceComponent } from './entrance/entrance.component';


@NgModule({
  declarations: [
    PageComponent,
    RegistrationComponent,
    EntranceComponent
  ],
  imports: [
    CommonModule,
    FirstPageRoutingModule
  ]
})
export class FirstPageModule { }
