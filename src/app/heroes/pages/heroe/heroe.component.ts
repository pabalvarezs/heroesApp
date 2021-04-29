import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap, tap } from "rxjs/operators";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe! : Heroe;

  constructor(  private activateRoute : ActivatedRoute,
                private heroesService : HeroesService) { }

  ngOnInit(): void {

  //  this.activateRoute.params
  //   .subscribe(({id}) => {
  //     this.heroesService.getHeroe(id)
  //       .subscribe( heroe => {
  //         this.heroe = heroe
  //       })
  //   });
    this.activateRoute.params
      .pipe(
        switchMap( (resp) => this.heroesService.getHeroe(resp.id) ),
        tap(console.log)
      )    
      .subscribe( heroe =>  this.heroe = heroe );
  }

}
