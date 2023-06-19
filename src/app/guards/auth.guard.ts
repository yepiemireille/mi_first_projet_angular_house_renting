import { CanActivate, CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Injectable } from "@angular/core";



@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate{

    constructor(private router : Router, private authService : AuthService){

    }
    canActivate(){
        console.log(this.authService.isLoggin())
        if (this.authService.isLoggin()) {
            this.router.navigate(['/basic'])

            return false
        }

        this.router.navigate(['/login'])
      return true 
         
    }

}