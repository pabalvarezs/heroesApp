import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { logging } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent  {

  constructor( private router :Router) { }

  login(){

    // ir al backend
    // un usuario, debemos guardarlo en un servicio

    this.router.navigate(['./heroes']);
  }
}
