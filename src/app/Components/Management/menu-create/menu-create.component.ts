import { Location } from '@angular/common';
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
  existMenuList:Array<any>=[];
  Id:any=0;
  status=[{id:0,name:"Active"},{id:1,name:"InActive"}];
  constructor(private clientService:DataService,private toastr:ToastrService,private fb:FormBuilder,private location:Location){}
  ngOnInit(): void {

   this.ResetValue();
    if(this.Id !=0){
      this.savingMode="Update";
      this.GetDataById()
    }
    this.getMenuList();
  }
  ResetValue(){
    this.menuFormData=this.fb.group({
      MenuId:[0],
      MenuName:[''],
      ParentMenu:[0],
      MenuUrl:[''],
      MenuIcon:[''],
      MenuSerial:[0],
      MenuStatus:[0],
      CreatedAt:[new Date()],
      UpdatedAt:[new Date()],
      CreatedBy:[0],
      UpdatedBy:[0]

    })
  }
  getMenuList(){
    this.clientService.GetData("Menu/GetMenu").subscribe((obj:any)=>{
      this.existMenuList=obj;
      debugger;
    },
    (error: HttpErrorResponse) => {
      if(error)
      this.toastr.error(`Failed to Retrive data.`, ' Failure!!!');
    }
   
    )
  }
  OnSubmit(){
    if(this.menuFormData.value.MenuId ==0){
      this.clientService.PostData("Menu/NewMenu",this.menuFormData.value).subscribe((data:any)=>{
        if(data)
        this.ResetValue
        this.toastr.success(`Data Saved Successfully.`, ' Success!!!');
        this.OnClose();
      },
      (error: HttpErrorResponse) => {
        if(error)
        this.toastr.error(`Failed to Create data.`, ' Failure!!!');
      }
      )
    }else{
      this.clientService.PutData("Menu/EditMenu",this.menuFormData.value.MenuId,this.menuFormData.value).subscribe((data:any)=>{
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
    this.location.back();
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
