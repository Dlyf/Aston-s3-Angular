import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'astonBlogApp';
  titlePrincipal = 'Titre';
  resume = 'Resume';
  numberLike = 0;
  actif: boolean = true;
}
