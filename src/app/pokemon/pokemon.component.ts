
import { Component } from '@angular/core';
import { Pokemon } from './pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
 pokemon: Pokemon = {} as Pokemon;

 constructor(private pokemonService: PokemonService){ }

 ngOnInit(): void { //inicialização do componente
  this.loadPokemon(1);
}
 loadPokemon(num: number) {
  this.pokemonService.getPokemon(num).subscribe({
      next: pokemon => this.pokemon = pokemon
    }
  );

}
}
