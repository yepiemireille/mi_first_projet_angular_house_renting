import { Injectable } from '@angular/core';
import { IUser } from '../components/liste-users/users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly USER_API_URL = 'api/users.json'; // readonly pour dire que nous avons le droit de lire cette valeur
  constructor(private http: HttpClient) { }//05min13s

  public getUsers(): Observable<IUser[]>{
    //
    return this.http.get<IUser[]>(this.USER_API_URL);
  }
}
