import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm = this.fb.group({
    userName: [''],
    password: [''],
  });

  constructor(private fb:FormBuilder, private router : Router , private authService:AuthService){

  }

  ngOnInit(): void {
  
  }

  onLogged(){
    console.log(this.loginForm.value)
    let user ={
         username : this.loginForm.value.userName,
         password : this.loginForm.value.password
    }
  this.authService.login(user)
    this.router.navigate(['/basic'])
  }



}
