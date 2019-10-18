import { Component } from '@angular/core';


@Component({
    selector: 'app-movie-list',
    template: `
    <div class="container-fluid mt-5">

    <h5 class="mt-5">Trending Now</h5>
    <div class="row mt-5">
      <div class="row__inner">

      <app-movie-thumbnail *ngFor="let movie of movies" [movie]="movie"></app-movie-thumbnail>

      </div>
    </div>
  </div>
    `,
    styleUrls: ['/movie-list.component.scss']
})
export class MovieListComponent {



    movies = [
      {
        id: 1,
        title: 'The PerfectDate',
        movieImg: '/assets/movie/thePerfectDate.jpg',
        movieYear: 2018
    },
    {
      id: 2,
      title: 'BlackList',
      movieImg: '/assets/movie/the-blacklist.jpg',
      movieYear: 2018
  },
  {
    id: 3,
    title: 'The IrishMan',
    movieImg: '/assets/movie/the-irishman-poster-slice.jpg',
    movieYear: 2019
},
{
  id: 4,
  title: 'Lone Survivor',
  movieImg: '/assets/movie/thePerfectDate.jpg',
  movieYear: 2018
},
{
  id: 5,
  title: 'Frontline',
  movieImg: '/assets/movie/frontline.jpg',
  movieYear: 2019
},
{
  id: 6,
  title: 'Designator Survivor',
  movieImg: '/assets/movie/ds.jpg',
  movieYear: 2018
},
{
  id: 7,
  title: 'Bird Box',
  movieImg: '/assets/movie/birdbox.jpg',
  movieYear: 2018
}
  ];
}
