import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-nav-bar></app-nav-bar>
    <app-movie-list></app-movie-list>`
})
export class AppComponent {
  title = 'netflix';
}
