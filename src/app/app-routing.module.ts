import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicLayoutComponent } from './components/basic-layout/basic-layout.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { PageNotFindComponent } from './components/page-not-find/page-not-find.component';

const routes: Routes = [
  {path:'basic', component: BasicLayoutComponent, 
    // canActivate: [AuthGuard],
    children:[
      // {path:'profile',  loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
      {path:'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)},
      {path:'home', component:HomeComponent},
      {path:'', redirectTo: '/basic/home', pathMatch:'full'},
    ]
  },  
  {path:'login', component: LoginComponent, },
  {path:'page-not-found', component: PageNotFindComponent, },
  {path:'', redirectTo: '/login', pathMatch:'full'},
  {path:'**', redirectTo: '/page-not-found', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
