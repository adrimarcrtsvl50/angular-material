import { Injectable } from '@angular/core';
import { Movie } from '../dto/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[] = [
    {name: 'La isla siniestra', year: 2010, actores: 'leonardo DiCaprio'},
    {name: 'Perdida', year: 2014, actores: 'Kimberly Jan Dickens'},
    {name: 'The number 23', year: 2007, actores: 'Jim Carrey'},
    {name: 'El Origen', year: 2010, actores: 'Marion Cotillard'},
    {name: 'El maquinista', year: 2004, actores: 'Christian Bale'}
  ];

  constructor() { }

  getMovies() {
    return this.movies;
  }
}
