import { Injectable } from '@angular/core';
import { Movie } from '../dto/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[] = [
    {name: 'La isla siniestra', year: 2010, actores: 'leonardo DiCaprio'},
    {name: 'Perdida', year: 2014, actores: 'juan'},
    {name: 'The number 23', year: 2007, actores: 'juan'},
    {name: 'El Origen', year: 2010, actores: 'juan'},
    {name: 'El maquinista', year: 2004, actores: 'juan'}
  ];

  constructor() { }

  getMovies() {
    return this.movies;
  }
}
