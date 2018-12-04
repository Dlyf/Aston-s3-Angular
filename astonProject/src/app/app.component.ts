import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'astonProject';
  firstName: string = 'Dominique';
  actif: boolean = true;
  
}
