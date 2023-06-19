import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user){
    localStorage.setItem('user',user)
  }

  isLoggin() : boolean {
    if (localStorage.getItem('user')!=undefined) {
      return true ;
    } else {
      return false
    }
    
  }
}
