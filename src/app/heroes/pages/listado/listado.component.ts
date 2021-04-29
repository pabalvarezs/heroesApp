import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  constructor( private heroesServices : HeroesService) { }

  ngOnInit(): void {
  
    this.heroesServices.getHeroes()
      .subscribe(resp => console.log(resp));
    // this.heroesServices.getHeroes().subscribe(console.log);
      
  }



}
