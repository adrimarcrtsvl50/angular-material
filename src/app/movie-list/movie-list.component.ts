import { Component } from '@angular/core';
import { Movie } from '../dto/movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  displayedColumns: string[] = ['name', 'year', 'actores'];
  movies: Movie[];

  constructor(private movieService: MovieService) { 
    this.movies = this.movieService.getMovies();
  }

  ngOnInit() {
  }


}
