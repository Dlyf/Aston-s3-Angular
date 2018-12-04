import { Component, OnInit, Input } from '@angular/core';
import { Stagiaire } from '../stagiaire';



@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {
  @Input() stagiaire:Stagiaire;
  @Input() i:Number;
  constructor() { }

  ngOnInit() {
  }

  lire() {
    this.stagiaire.actif = false;
  }
}
