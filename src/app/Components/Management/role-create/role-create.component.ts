import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.css']
})
export class RoleCreateComponent implements OnInit{
  savingMode:string="Submit";
  RoleFormData:FormGroup=new FormGroup({}); 
  constructor(
    private location:Location,
    private dataService:DataService,
    private fb:FormBuilder,
    private toastr:ToastrService
    ) { }
  ngOnInit(): void {
    this.ResetValues();
  }
  ResetValues(){ 
    this.RoleFormData=this.fb.group({
      DepartmentId:[0],
      DepartmentName:[''],
      DepartmentDescription:[''],
      CompanyId:[0],
      CreatedAt:[new Date()],
      UpdatedAt:[new Date()],
      CreatedBy:[0],
      UpdatedBy:[0]
    }); 
  }
  OnSubmit(){
    if(this.RoleFormData.value.RoleId ==0){
      this.dataService.PostData("Role/NewRole",this.RoleFormData.value).subscribe((data:any)=>{
        this.ResetValues
        this.toastr.success(`Data Saved Successfully.`, ' Success!!!');
        this.OnClose();
      },
      (error: HttpErrorResponse) => {
        if(error)
        this.toastr.error(`Failed to Create data.`, ' Failure!!!');
      }
      )
    }else{
      this.dataService.PutData("Menu/EditMenu",this.RoleFormData.value.RoleId,this.RoleFormData.value).subscribe((data:any)=>{
        if(data)
        this.ResetValues();
      this.OnClose();
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
}
