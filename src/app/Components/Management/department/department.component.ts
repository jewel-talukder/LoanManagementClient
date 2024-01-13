import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit{
  DepartmentList:Array<any>=[];
  showPageSizeSelector = true;
  showNavButtons = true;
  showInfo = true;
  ngOnInit(): void {
    this.InitalValue();
  }
  constructor(private dataService:DataService,private router:Router){}
  InitalValue(){
    this.dataService.GetData("Department/GetDepartment").subscribe((obj:any)=>{
      this.DepartmentList=obj;
    })
  }
  addNew(){
this.router.navigate(['/department-create']);
  }
  Edit(evt:any){

  }
 
 
  Details(evt:any){
  }
}
