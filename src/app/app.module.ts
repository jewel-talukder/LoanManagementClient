import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent
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
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
