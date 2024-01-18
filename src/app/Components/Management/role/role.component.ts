import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit{
  RoleList:Array<any>=[];
  showPageSizeSelector = true;
  showNavButtons = true;
  showInfo = true;
  constructor(private router:Router,private dataService:DataService) { }
  ngOnInit(): void {
    this.InitalValue(); 
  }
  InitalValue(){
    this.dataService.GetData("Role/GetRole").subscribe((obj:any)=>{
      this.RoleList=obj;
    }),
    (error:any)=>{
      if(error)
      console.log(error);
    }
    
  }
addNew(){
this.router.navigate(['/role-create']);
  }
  Details(evt:any){

  }
  Edit(evt:any){
  }
}
