import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { HauseRentingComponent } from '../hause-renting/hause-renting.component';
import { RoomerComponent } from '../roomer/roomer.component';
import { RoleComponent } from '../role/role.component';
import { AdminHomeComponent } from '../admin-home/admin-home.component';



@NgModule({
  declarations: [
    AdminComponent,
    HauseRentingComponent,
    RoomerComponent,
    RoleComponent,
    AdminHomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
