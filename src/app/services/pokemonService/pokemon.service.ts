import { Injectable, inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonModel } from 'src/app/models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = "https://pokeapi.co/api/v2/pokemon/"
  private http = inject(HttpClient); 

  constructor() { }

  getPokemon(name:string): Observable<PokemonModel>{
    return this.http.get<PokemonModel>(`${this.url}${name}`)
  }

  getAllPokemons(): Observable<PokemonModel[]>{
    return this.http.get<PokemonModel[]>(`${this.url}?limit=1010`)
  }

}
