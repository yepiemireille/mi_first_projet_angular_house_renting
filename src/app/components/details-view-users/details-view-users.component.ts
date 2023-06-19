import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { IUser } from '../liste-users/users';

@Component({
  selector: 'app-details-view-users',
  templateUrl: './details-view-users.component.html',
  styleUrls: ['./details-view-users.component.css']
})
export class DetailsViewUsersComponent implements OnInit {
  public user : IUser = <IUser>{}

  constructor(
    private route: ActivatedRoute, 
    private usersService: UsersService,
    private router: Router
    ){} // injecte le service ki s'oqp des routes ki sont activées en angular
  
  ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id') // get('id')= (on prend le mm nom "id" k'on a spécifier dans 'users-view/:id') snapshot:valeur initiale, de cette valeur iitiale on va chercher la liste des paramettres avec paramMap (+): transforme cette chaine de caractère (this.route.snapshot.paramMap.get('id')) en nombre
    console.log('id', id);
    this.usersService.getUsers().subscribe((users:IUser[]) =>{
      this.user = users.find(user => user.usersId === id);
      console.log('liste user', this.user);
    })
  }

  backToListeUser(){
    this.router.navigate(['/basic/admin/admin/users/users/users-list']);
  }

 

}
