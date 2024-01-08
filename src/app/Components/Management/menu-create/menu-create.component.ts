import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-menu-create',
  templateUrl: './menu-create.component.html',
  styleUrls: ['./menu-create.component.css']
})
export class MenuCreateComponent implements OnInit{
  menuFormData:FormGroup=new FormGroup({});
  savingMode:string="Create";
  Id:any;
  constructor(private clientService:DataService,private toastr:ToastrService,private fb:FormBuilder){}
  ngOnInit(): void {
   this.ResetValue();
    if(this.Id !=0){
      this.savingMode="Update";
      this.GetDataById()
    }
  }
  ResetValue(){
    
  }
  OnSubmit(){
    if(this.menuFormData.value.MENU_ID ==0){
      this.clientService.PostData("Menu/NewMenu",this.menuFormData).subscribe((data:any)=>{
        if(data)
        this.ResetValue
      },
      (error: HttpErrorResponse) => {
        if(error)
        this.toastr.error(`Failed to Create data.`, ' Failure!!!');
      }
      )
    }else{
      this.clientService.PutData("Menu/EditMenu",this.menuFormData.value.MENU_ID,this.menuFormData.value).subscribe((data:any)=>{
        if(data)
        this.ResetValue();
      },(error:HttpErrorResponse)=>{
        if(error)
        this.toastr.error("Failed to Update data",'Failure !!!');
      }
      )
    }

  }
  OnClose(){
    // this.clientService.isShowPopUpVisiable=false;
    // this.clientService.Id=0;
  }
  GetDataById(){
    this.ResetValue();
    this.clientService.GetDataById("Menu",this.Id).subscribe((data:any)=>{
      // this.menuFormData.MENU_ICON=data.MENU_ICON;
      // this.menuFormData.MENU_ID=data.MENU_ID,
      // this.menuFormData.MENU_LINK=data.MENU_LINK,
      // this.menuFormData.MENU_NAME=data.MENU_NAME,
      // this.menuFormData.MENU_PRIORITY=data.MENU_PRIORITY
    },
    (error: HttpErrorResponse) => {
      if(error)
      this.toastr.error(`Failed to Retrive data.`, ' Failure!!!');
    }
    )
  }
}
