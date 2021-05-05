import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl :string = environment.baseUrl;
  private _auth : Auth | undefined;

  get auth(): Auth{
    return { ...this._auth! };       //se desestructura para que no se cambie
  }

  constructor( private http : HttpClient) { }

  login() {

    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
            .pipe(
              tap( auth =>  this._auth = auth),
              tap( auth =>  localStorage.setItem('id', auth.id )), 
            );
  }

  logout(){
    this._auth = undefined;
  }
}


