import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.css']
})
export class DepartmentCreateComponent implements OnInit{
  savingMode:string="Submit";
  DepartmentFormData:FormGroup=new FormGroup({}); 
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
    this.DepartmentFormData=this.fb.group({
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
    if(this.DepartmentFormData.value.DepartmentId ==0){
      debugger;
      this.dataService.PostData("Department/NewDepartment",this.DepartmentFormData.value).subscribe((data:any)=>{
        debugger;
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
      this.dataService.PutData("Menu/EditMenu",this.DepartmentFormData.value.DepartmentId,this.DepartmentFormData.value).subscribe((data:any)=>{
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
