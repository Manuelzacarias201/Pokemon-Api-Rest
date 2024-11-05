import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Pokemon } from '../../models/pokemon';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  pokemon?: Pokemon;

  constructor(private apiService: ServiceService) {}

  ngOnInit(): void {
    const name = localStorage.getItem('pokemonName'); // Obtener solo el nombre
    if (name) {
      this.apiService.getPokemonDetails(name).subscribe({
        next: (data: Pokemon) => {
          this.pokemon = data;
        },
        error: (err: any) => {
          console.error('Error al obtener los detalles del Pokémon:', err);
        }
      });
    }
  }
}
