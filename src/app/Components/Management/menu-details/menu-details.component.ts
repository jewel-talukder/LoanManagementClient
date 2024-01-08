import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit{
  isPopupVisible:boolean=false;
  DetailsMenu:any;
  Id:any=0;
  constructor(private dataService:DataService,private toastr:ToastrService){}
  ngOnInit(): void {
  this.GetDataById();
  }
  GetDataById(){
    this.dataService.GetDataById("Menu",this.Id).subscribe((data:any)=>{
      this.DetailsMenu.MENU_ICON=data.MENU_ICON;
      this.DetailsMenu.MENU_ID=data.MENU_ID,
      this.DetailsMenu.MENU_LINK=data.MENU_LINK,
      this.DetailsMenu.MENU_NAME=data.MENU_NAME,
      this.DetailsMenu.MENU_PRIORITY=data.MENU_PRIORITY
    },
    (error: HttpErrorResponse) => {
      if(error)
      this.toastr.error(`Failed to Retrive data.`, ' Failure!!!');
    }
    )
  }
  OnClickEdit(){

  }
  OnClose(){
  // this.clientService.isShowPopUpVisiable=false;
  //   this.clientService.Id=0;
  }
}
