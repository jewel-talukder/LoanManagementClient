import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{
  loginUser:FormGroup=new FormGroup({});
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
constructor(private fb:FormBuilder){}
}
