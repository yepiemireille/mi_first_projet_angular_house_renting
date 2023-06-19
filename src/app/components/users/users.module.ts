import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ListeUsersComponent } from '../liste-users/liste-users.component';
import { DetailsAddUsersComponent } from '../details-add-users/details-add-users.component';
import { DetailsViewUsersComponent } from '../details-view-users/details-view-users.component';
import { DetailsEditUsersComponent } from '../details-edit-users/details-edit-users.component';


@NgModule({
  declarations: [
    UsersComponent,
    ListeUsersComponent,
    DetailsAddUsersComponent,
    DetailsViewUsersComponent,
    DetailsEditUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    //HttpClientModule
  ]
})
export class UsersModule { }
