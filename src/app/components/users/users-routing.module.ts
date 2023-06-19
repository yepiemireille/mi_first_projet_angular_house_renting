import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { ListeUsersComponent } from '../liste-users/liste-users.component';
import { DetailsAddUsersComponent } from '../details-add-users/details-add-users.component';
import { DetailsViewUsersComponent } from '../details-view-users/details-view-users.component';
import { DetailsEditUsersComponent } from '../details-edit-users/details-edit-users.component';
import { UserDetailGuard } from 'src/app/guards/user-detail.guard';

const routes: Routes = [
  {path:'users', component:UsersComponent, 
    children:[
      {path:'users-list', component:ListeUsersComponent},
      {path:'users-add', component:DetailsAddUsersComponent},
      { path:'users-view/:id', component:DetailsViewUsersComponent,
        canActivate:[UserDetailGuard]
      }, //utilisateur/:id
      {path:'users-edit', component:DetailsEditUsersComponent}
    ]
  },
  {path:'', redirectTo:'/basic/admin/admin/users/users/users-list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
