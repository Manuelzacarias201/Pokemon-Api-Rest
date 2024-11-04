import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(response => {
      this.pokemons = response.results.map((pokemon: any) => ({
        name: pokemon.name,
        isFavorite: false
      }));
    });
  }

  toggleFavorite(pokemon: any): void {
    pokemon.isFavorite = !pokemon.isFavorite;
  }
}
