import { Component, OnInit } from '@angular/core';
import { IUser } from './users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.component.html',
  styleUrls: ['./liste-users.component.css']
})
export class ListeUsersComponent implements OnInit {

  constructor(private usersService:UsersService){}
  //video tutoriel angular 26 09min00s 
  public errMsg : string;
  public users : IUser[]= []

  ngOnInit(): void {
    this.usersService.getUsers().subscribe({
      next: users =>this.users =users,
      error: err => this.errMsg = err
    });
  }
}
