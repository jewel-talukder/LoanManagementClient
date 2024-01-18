import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-designation-create',
  templateUrl: './designation-create.component.html',
  styleUrls: ['./designation-create.component.css']
})
export class DesignationCreateComponent implements OnInit{
  savingMode:string="Submit";
  DepartmentList:Array<any>=[];
  DesignationFormData:FormGroup=new FormGroup({});
  constructor(
    private fb:FormBuilder,
    private location:Location,
    private dataService:DataService,
    private toastr:ToastrService
  ){} 
  ngOnInit(): void {
    this.resetForm();
    this.getDepartmentList();
  }
  getDepartmentList(){
    this.dataService.GetData("Department/GetDepartment").subscribe(res=>{
      this.DepartmentList=res as Array<any>;
    }),(err:any)=>{
      console.log(err);
      this.toastr.error("Error!","Error While Getting Department List");
    }
  }
  resetForm(){
    this.DesignationFormData=this.fb.group({
      DesignationId:[0],
      DesignationName:[''],
      DesignationDescription:[''],
      DepartmentId:[0],
      CompanyId:[0],
      CreatedAt:[new Date()],
      UpdatedAt:[new Date()],
      CreatedBy:[0],
      UpdatedBy:[0]
    })
  }
  OnSubmit(){
    if(this.DesignationFormData.value.DesignationId ==0){
      debugger;
      this.dataService.PostData("Designation/NewDesignation",this.DesignationFormData.value).subscribe((data:any)=>{
        this.resetForm();
        this.toastr.success(`Data Saved Successfully.`, ' Success!!!');
        this.OnClose();
      },
      (error: HttpErrorResponse) => {
        if(error)
        this.toastr.error(`Failed to Create data.`, ' Failure!!!');
      }
      )
    }else{
      this.dataService.PutData("Menu/EditMenu",this.DesignationFormData.value.DesignationId,this.DesignationFormData.value).subscribe((data:any)=>{
        if(data)
        this.resetForm();
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
