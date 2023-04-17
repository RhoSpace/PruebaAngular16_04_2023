import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemonService/pokemon.service';
import { PokemonModel } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  infoPokemon: any;
  pokemons: any;
  
  pokeUpdate: any;
  // poke: {} = {}

  constructor(private pokemonService: PokemonService,) { 
    this.getAllPokemons();
  }

  ngOnInit(): void {
    
  }

  searchPokemon(name: string ) {
    this.pokemonService.getPokemon(name).subscribe({
      next: (res) => {
        this.infoPokemon = res;
      },
      error: (err) => {
        console.error(`Hemos tenido un error: ${err}`);
      },
      complete: () => console.info("Realizado con exito")
    })
  }

  getAllPokemons() {
    this.pokemonService.getAllPokemons().subscribe({
      next: (res) => {
        this.pokemons = res;
      },
      error: (err) => {
        console.error(`Hemos tenido un error: ${err}`);
      },
      complete: () => console.log(this.pokemons.results)
    })
  }

  updateFavPokemon(pokemon: any){
    this.pokeUpdate = pokemon;
  }

}
