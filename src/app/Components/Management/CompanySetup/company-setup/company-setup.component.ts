import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-company-setup',
  templateUrl: './company-setup.component.html',
  styleUrls: ['./company-setup.component.css']
})
export class CompanySetupComponent implements OnInit{
  BranchList:Array<any>=[];
  showPageSizeSelector = true;
  showNavButtons = true;
  showInfo = true;
  constructor(private dataService:DataService, private router:Router){}
  ngOnInit(): void {
  }
  InitalValue(){
    this.dataService.GetData("CompanySetUp/GetCompanySetUp").subscribe((obj:any)=>{
      this.BranchList=obj;
    })
  }
  addNew(){
this.router.navigate(['/company-create']);
  }
  Edit(evt:any){

  }
 
 
  Details(evt:any){
  }
}
