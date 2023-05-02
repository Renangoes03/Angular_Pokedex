import { Component } from '@angular/core';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
 pokemon: Pokemon = {} as Pokemon;


}
