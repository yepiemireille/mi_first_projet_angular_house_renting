import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailGuard implements CanActivate {
  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('guards', route);
    const id = +route.url[1].path; // sauvegarder l'id ke l'user aura entré

    if(isNaN(id) || id <= 0) {
      alert("l'utilisateur est inconnu");
      this.router.navigate(['/basic/admin/admin/users/users/users-list']);
      return false;
    }
    return true;
  }
  
}
