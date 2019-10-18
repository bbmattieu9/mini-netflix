import { Component, Input } from '@angular/core';



@Component({
    selector: 'app-movie-thumbnail',
    template: `


    <div class="tile">
        <div class="tile__media">
            <img class="tile__img" src="{{movie.movieImg}}"  />
        </div>
        <div class="tile__details">
            <div class="tile__title">
                {{movie.title}}
            </div>
        </div>
  </div>

    `,
    styleUrls: ['/movie-thumbnail.component.scss']
})
export class MovieThumbnailComponent {

    @Input() movie: any;

}
