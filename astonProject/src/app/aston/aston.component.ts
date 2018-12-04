import { Component, OnInit, Input } from '@angular/core';
import { Stagiaire } from '../stagiaire';

@Component({
  selector: 'app-aston',
  templateUrl: './aston.component.html',
  styleUrls: ['./aston.component.css']
})
export class AstonComponent implements OnInit {

  @Input() firstName: string;
  // stagiaires = ['Dominique', 'Emma', 'Alan', 'Sarah'];
  stagiaires = [
    new Stagiaire('Lung', 32, true),
    new Stagiaire('Azerty', 17, true),
    new Stagiaire('Dom', 27, true),
    new Stagiaire('Qwerty', 25, true)
  ];

  constructor() { }

  ngOnInit() {
  }

}
