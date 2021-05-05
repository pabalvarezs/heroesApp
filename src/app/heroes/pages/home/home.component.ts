import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor( private router :Router) { }

  ngOnInit(): void {
  }

  logout(){

    // ir al backend
    // un usuario, debemos guardarlo en un servicio

    this.router.navigate(['./auth']);
  }
}


