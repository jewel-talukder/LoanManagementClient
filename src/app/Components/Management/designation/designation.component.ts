import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit{
  DesignationList:Array<any>=[];
  showPageSizeSelector = true;
  showNavButtons = true;
  showInfo = true;
  constructor(private router:Router,private dataService:DataService) { }
  ngOnInit(): void {
    this.InitalValue(); 
  }
  InitalValue(){
    this.dataService.GetData("Designation/GetDesignation").subscribe((obj:any)=>{
      this.DesignationList=obj;
    }),
    (error:any)=>{
      if(error)
      console.log(error);
    }
    
  }
addNew(){
this.router.navigate(['/designation-create']);
  }
  Details(evt:any){

  }
  Edit(evt:any){
  }
}
