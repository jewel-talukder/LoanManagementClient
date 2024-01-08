import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './Components/Management/user-login/user-login.component';
import { MainLayoutComponent } from './Layout/main-layout/main-layout.component';
import { CompanySetupComponent } from './Components/Management/CompanySetup/company-setup/company-setup.component';
import { MenuComponent } from './Components/Management/menu/menu.component';
import { MenuCreateComponent } from './Components/Management/menu-create/menu-create.component';
import { MenuDetailsComponent } from './Components/Management/menu-details/menu-details.component';
import { AuthGuardService } from './Helpers/auth-guard.service';

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
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
