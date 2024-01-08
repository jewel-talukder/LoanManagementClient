import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{
  isLoadPanelVisible:boolean=false;
  submitButtonText:string="Login";
  loginUser:FormGroup=new FormGroup({});
  constructor(private fb:FormBuilder,private toastr:ToastrService,private dataService:DataService,private router:Router){}
  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(){
    this.loginUser=this.fb.group({
      UserId:[0],
      UserName:[''],
      UserEmail:[''],
      UserPhone:[''],
      DesignationId:[0],
      DepartmentId:[0],
      RoleId:[0],
      CompanyId:[0],
      UserPassword:[''],
      UserAddress:[''],
      UserGender:[''],
      UserBloodGroup:[''],
      UserNID:[''],
      UserPassport:[''],
      UserDrivingLicense:[''],
      UserPhoto:[''],
      UserSignature:[''],
      UserStatus:[''],
      UserJoiningDate:[''],
      UserResignDate:[''],
      CreatedAt:[new Date()],
      UpdatedAt:[new Date()],
      CreatedBy:[0],
      UpdatedBy:[0]
    })
  }




  loginUsers(){
    this.isLoadPanelVisible=true;
    this.submitButtonText="Waiting";
    setTimeout(() => {
      this.dataService.PostData('UserList/LoginUser',this.loginUser.value)
      .subscribe({
        next: (res: any): void => {
          if(res != null){
            this.toastr.success("Successfully Sign In", "Done");
            this.router.navigate(["company-setup"]);
            localStorage.setItem("companyId", res.companyId);
            localStorage.setItem("roleId", res.roleId);
             localStorage.setItem("userId", res.userId);
            localStorage.setItem("userName", res.userName);
             localStorage.setItem("userPhoto",res.userPhoto);
            this.isLoadPanelVisible = false;
            this.submitButtonText="Login";
          }else{
            this.toastr.error("Invalid UserName or Password", "Invalid User Or Email");
          this.isLoadPanelVisible = false;
          this.submitButtonText="Login";
          }
 
        },
        error: (err: HttpErrorResponse) => {
          this.toastr.error(err.error, "Invalid User Or Email");
          this.isLoadPanelVisible = false;
          this.submitButtonText="Login";
        }
      })
      
      this.isLoadPanelVisible=false;
    }, 4000);
      }
}
