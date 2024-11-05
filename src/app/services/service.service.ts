import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon'; 

  constructor(private http: HttpClient) { }


  getPokemon(nameOrId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${nameOrId}`);


  }

  getAllPokemons(limit: number = 100, offset: number = 0): Observable<any> {
    return this.http.get(`${this.apiUrl}?limit=${limit}&offset=${offset}`);
  }
  getPokemonDetails(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/${name}`);
  }
  
}
