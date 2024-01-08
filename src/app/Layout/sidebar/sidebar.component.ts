import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  menuSubmenuList:any[]=[];
  constructor(private clientService:DataService,private toastr:ToastrService,private router:Router){}
  ngOnInit() {
  //  this.InitializeValues();
  }
 InitializeValues() {
  debugger;
    var rollId=localStorage.getItem("userRoll");
    this.clientService.GetData("Menu/GetMenuSubmenuList/"+Number(rollId)).subscribe((data: any) => {
        this.menuSubmenuList = data;
    },
      (error: any) => {
       if(error)
       this.toastr.error("Failed to To Get Login");
        this.router.navigate(["/"])
      }
    );
  }
}
