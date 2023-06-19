import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HauseRentingComponent } from '../hause-renting/hause-renting.component';
import { RoomerComponent } from '../roomer/roomer.component';
import { RoleComponent } from '../role/role.component';


const routes: Routes = [
  {path:'admin', component: AdminComponent, 
    children:[
      {path:'hause-renting', component:HauseRentingComponent},
      {path:'users', loadChildren:() => import('../users/users.module').then(m => m.UsersModule)},
      {path:'roomer', component:RoomerComponent}
    ]
  },
  {path:'', redirectTo:'/basic/admin/admin', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
