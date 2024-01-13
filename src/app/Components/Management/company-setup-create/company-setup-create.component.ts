import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-company-setup-create',
  templateUrl: './company-setup-create.component.html',
  styleUrls: ['./company-setup-create.component.css']
})
export class CompanySetupCreateComponent implements OnInit{
  CompanyFormData:FormGroup=new FormGroup({});
  savingMode:string="Submit";
  existCompanyList:Array<any>=[];
  constructor(
    private location:Location,
    private dataService:DataService,
    private fb:FormBuilder,
    private toastr:ToastrService
  ){

  }
  ngOnInit(): void {
    this.ResetValues();
    this.InitalValue();
  }
  InitalValue(){
    this.dataService.GetData("CompanySetUp/GetCompanySetUp").subscribe((obj:any)=>{
      this.existCompanyList=obj;
    })
  }
  ResetValues(){
    this.CompanyFormData=this.fb.group({
      CompanyId:[0],
      CompanyName:[''],
      CompanyAddress:[''],
      CompanyPhone1:[''],
      CompanyPhone2:[''],
      CompanyEmail:[''],
      FacebookUrl:[''],
      ParentCompany:[0],
    });
  }
  OnSubmit(){
    if(this.CompanyFormData.value.CompanyId ==0){
      this.dataService.PostData("CompanySetUp/NewCompanySetUp",this.CompanyFormData.value).subscribe((data:any)=>{
        if(data)
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
      this.dataService.PutData("Menu/EditMenu",this.CompanyFormData.value.CompanyId,this.CompanyFormData.value).subscribe((data:any)=>{
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
