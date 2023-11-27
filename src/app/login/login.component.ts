import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email?:string;
  password?:string;

  constructor(
    private router: Router
  ) { }


  createUserInStore(){
    if(!this.email || !this.password){
      alert("Preencha todos os campos");
      return;
    }else if(!this.isValidEmail(this.email)){
      alert("Email invalido");
      return;
    }else{
      localStorage.setItem("login", JSON.stringify({
      email: this.email,
      password: this.password
    }))
    this.router.navigate(["/albums"]);
    } 
  }

 isValidEmail(email:any) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }
}
