import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
    img {
      width:100%;
      border-radius :20px;
    }
    
    
    `
  ]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id : 'DC Comics',
      desc : 'DC-Comics'

    },
    {
      id : 'Marvel Comics',
      desc : 'Marvel-Comics'

    }
  ];

  heroe : Heroe = {
    superhero         : '',
    alter_ego         : '',
    characters        : '',
    first_appearance  : '',
    publisher         : Publisher.MarvelComics,
  }
  constructor(  private heroesService:HeroesService,
                private activeRoute : ActivatedRoute,
                private router : Router) { }

  ngOnInit(): void {
    
    if (this.router.url.includes('editar')) {
      this.activeRoute.params
        .pipe(
           switchMap (({id}) => this.heroesService.getHeroe(id))
        )
        .subscribe(heroe => this.heroe = heroe
        )
    } else {
        return;
    }

  }


  guardar(){
    
    if (this.heroe.superhero.trim().length === 0) {
      return;
    } 

    if (this.heroe.id) {
      // actualizar
      this.heroesService.actualizarHeroe(this.heroe)
        .subscribe(heroe => console.log('actualizando heroe',heroe)
        )

    } 
    else {
      // crear
      this.heroesService.agregarHeroe(this.heroe)
      .subscribe( heroe => {
        console.log('creando heroe', heroe)
        this.router.navigate(['/heroes/editar',heroe.id]) ;
          
      })
    }
  }

  borrarHeroe(){
    this.heroesService.borrarHeroe(this.heroe.id!)
      .subscribe ( resp => {
        this.router.navigate(['/heroes']);

      } )

  }

}


