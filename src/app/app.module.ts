import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
  DxDataGridModule,
  DevExtremeModule,
  DxAccordionModule,
  DxButtonModule,
  DxCheckBoxModule,
  DxDropDownBoxModule,
  DxFormModule,
  DxLoadPanelModule,
  DxPopupModule,
  DxScrollViewModule,
  DxSelectBoxModule,
  DxTemplateModule,
  DxTextAreaModule,
  DxTextBoxModule,
  DxTooltipModule,
  DxTreeViewModule,
  DxContextMenuModule, 
  DxDrawerModule,
  DxDateBoxModule,
  DxDateRangeBoxModule,
  DxRadioGroupModule,
  DxTabsModule,
  DxChartModule,
  DxActionSheetModule,
  DxFileUploaderModule, 
  DxProgressBarModule,
  DxPopoverModule, 
  DxLoadIndicatorModule
 } from 'devextreme-angular';
 import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './Components/Management/user-login/user-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MainLayoutComponent } from './Layout/main-layout/main-layout.component';
import { CompanySetupComponent } from './Components/Management/CompanySetup/company-setup/company-setup.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { SidebarComponent } from './Layout/sidebar/sidebar.component';
import { MenuComponent } from './Components/Management/menu/menu.component';
import { MenuCreateComponent } from './Components/Management/menu-create/menu-create.component';
import { MenuDetailsComponent } from './Components/Management/menu-details/menu-details.component';
import { DepartmentComponent } from './Components/Management/department/department.component';
import { DepartmentCreateComponent } from './Components/Management/department-create/department-create.component';
import { DepartmentDetailsComponent } from './Components/Management/department-details/department-details.component';
import { UserComponent } from './Components/Management/user/user.component';
import { UserCreateComponent } from './Components/Management/user-create/user-create.component';
import { UserDetailsComponent } from './Components/Management/user-details/user-details.component';
import { DesignationComponent } from './Components/Management/designation/designation.component';
import { DesignationCreateComponent } from './Components/Management/designation-create/designation-create.component';
import { DesignationDetailsComponent } from './Components/Management/designation-details/designation-details.component';
import { CompanySetupCreateComponent } from './Components/Management/company-setup-create/company-setup-create.component';
import { CompanySetupDetailsComponent } from './Components/Management/company-setup-details/company-setup-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    MainLayoutComponent,
    CompanySetupComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MenuComponent,
    MenuCreateComponent,
    MenuDetailsComponent,
    DepartmentComponent,
    DepartmentCreateComponent,
    DepartmentDetailsComponent,
    UserComponent,
    UserCreateComponent,
    UserDetailsComponent,
    DesignationComponent,
    DesignationCreateComponent,
    DesignationDetailsComponent,
    CompanySetupCreateComponent,
    CompanySetupDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DxDataGridModule,
    HttpClientModule,
    DevExtremeModule,
    DxAccordionModule,
    DxButtonModule,
    DxCheckBoxModule,
    DxDropDownBoxModule,
    DxFormModule,
    DxLoadPanelModule,
    DxPopupModule,
    DxScrollViewModule,
    DxSelectBoxModule,
    DxTemplateModule,
    DxTextAreaModule,
    DxTextBoxModule,
    DxTooltipModule,
    DxTreeViewModule,
    DxContextMenuModule, 
    DxDrawerModule,
    DxDateBoxModule,
    DxDateRangeBoxModule,
    DxRadioGroupModule,
    DxTabsModule,
    DxChartModule,
    DxActionSheetModule,
    DxFileUploaderModule, 
    DxProgressBarModule,
    DxPopoverModule, 
    DxLoadIndicatorModule,
    ToastrModule.forRoot(
      {
        timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: false
      }
    ),
    FormsModule,  
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
