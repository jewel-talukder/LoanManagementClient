import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private router:Router,
    private toastr:ToastrService
    ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      if(next ||state){
        
      }     
      if(!!localStorage.getItem("userId"))
      {
        return true;
      }
      else
      {
        this.router.navigate(['/']);
        this.toastr.error("Login First","Failed")
        return false;
      }   
      
  }
}
