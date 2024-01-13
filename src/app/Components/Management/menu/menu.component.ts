import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  isLoadPanelVisible:boolean=false;
  showPageSizeSelector = true;
  showNavButtons = true;
  showInfo = true;
  MenuList:Array<any>=[];
  constructor(public clientService:DataService,private toastr:ToastrService,private router:Router){
    this.Edit=this.Edit.bind(this);
    this.Details=this.Details.bind(this);
  }
  ngOnInit(): void {
    this.InitalValue();
  }
  InitalValue(){
    this.isLoadPanelVisible=true;
    this.clientService.GetData("Menu/GetMenu").subscribe((obj:any)=>{
      this.MenuList=obj;
      this.isLoadPanelVisible=false;
    },
    (error: HttpErrorResponse) => {
      if(error)
      this.toastr.error(`Failed to Retrive data.`, ' Failure!!!');
    }
   
    )
  }
  addNew(){
    this.router.navigate(['/menu-create']);
  }
  Edit(evt:any){

  }
 
 
  Details(evt:any){
  }
}
