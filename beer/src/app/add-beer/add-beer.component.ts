import { Component, OnInit } from '@angular/core';
import { BeerService } from '../service/beer.service';

@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.component.html',
  styleUrls: ['./add-beer.component.css']
})
export class AddBeerComponent implements OnInit {

  constructor(private beerService: BeerService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.form.value)
    this.beerService.addBeer(form.form.value)
  }

}
