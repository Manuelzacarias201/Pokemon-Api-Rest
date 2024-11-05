import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'url', 'favorite'];
  dataSource: any[] = [];
  favoriteList: string[] = []; 

  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit(): void {
    // Cargar la lista 
    const savedFavorites = localStorage.getItem('favorites');
    this.favoriteList = savedFavorites ? JSON.parse(savedFavorites) : [];

    // Obtener los datos 
    this.service.getAllPokemons(100, 0).subscribe(
      (data: any) => {
        this.dataSource = data.results.map((item: any) => ({
          ...item,
          isFavorite: this.favoriteList.includes(item.name) // Marcar 
        }));
      },
      error => console.error(error)
    );
  }

  toggleFavorite(element: any): void {
    element.isFavorite = !element.isFavorite;

    if (element.isFavorite) {
      this.favoriteList.push(element.name);
    } else {
      this.favoriteList = this.favoriteList.filter(fav => fav !== element.name);
    }

    // Actualizar localStorage
    localStorage.setItem('favorites', JSON.stringify(this.favoriteList));
  }

  viewDetails(name: string): void {
    localStorage.setItem('pokemonName', name); // Guardar solo el nombre o ID
    this.router.navigate(['/Detalles']); // Navegar a la ruta de detalles
  }
  
  
}
