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
    MenuDetailsComponent
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
      positionClass: 'toast-bottom-left',
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
