import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './Components/Management/user-login/user-login.component';
import { MainLayoutComponent } from './Layout/main-layout/main-layout.component';
import { CompanySetupComponent } from './Components/Management/CompanySetup/company-setup/company-setup.component';
import { MenuComponent } from './Components/Management/menu/menu.component';
import { MenuCreateComponent } from './Components/Management/menu-create/menu-create.component';
import { MenuDetailsComponent } from './Components/Management/menu-details/menu-details.component';
import { AuthGuardService } from './Helpers/auth-guard.service';
import { DepartmentComponent } from './Components/Management/department/department.component';
import { DepartmentCreateComponent } from './Components/Management/department-create/department-create.component';
import { DepartmentDetailsComponent } from './Components/Management/department-details/department-details.component';
import { UserComponent } from './Components/Management/user/user.component';
import { UserDetailsComponent } from './Components/Management/user-details/user-details.component';
import { UserCreateComponent } from './Components/Management/user-create/user-create.component';

const routes: Routes = [
  {
    path:'',
    component:UserLoginComponent

  },{
    path:'',
    canActivate:[AuthGuardService],
    component:MainLayoutComponent,
    children:[
      {
        path:'company-setup',
        component:CompanySetupComponent
      },
      {
        path:'menu',
        component:MenuComponent
      },
      {
        path:'menu-create',
        component:MenuCreateComponent
      },
      {
        path:'menu-details',
        component:MenuDetailsComponent 
      },{
        path:'department',
        component:DepartmentComponent
      },{
        path:'department-create',
        component:DepartmentCreateComponent
      },{
        path:'department-details',
        component:DepartmentDetailsComponent
      },{
        path:'user',
        component:UserComponent
      },{
        path:'user-create',
        component:UserCreateComponent
      },{
        path:'user-details',
        component:UserDetailsComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
