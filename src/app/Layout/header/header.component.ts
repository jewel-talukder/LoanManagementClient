import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  userImage:string=""
  userName:string="";
  constructor(private router:Router){}
  ngOnInit(): void {
this.userImage=localStorage.getItem("userImage")?.toString()!;
this.userName=localStorage.getItem("userName")?.toString()!;
  }
  signOut(){
    localStorage.clear();
    this.router.navigate(["/"]);
  }
}
