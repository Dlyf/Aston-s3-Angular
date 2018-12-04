import { Component, OnInit, Input } from '@angular/core';
import { DisplayBlog } from '../displayBlog';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.css']
})
export class ListeArticlesComponent implements OnInit {
  @Input() displayBlog;
  @Input() i:Number;
  
  constructor() { }
  colore() {
    this.displayBlog.actif = false;
  }

  ngOnInit() {
  }

}
