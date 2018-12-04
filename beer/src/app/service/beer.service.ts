import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  beers:Object[] = [
    {
      "name": 'Glouglou',
      "price": 23.34
    },
    {
      "name": 'Cool',
      "price": 30.20
    },
    {
      "name": 'Tropical',
      "price": 13.10
    },
    {
      "name": 'Red',
      "price": 5.14
    }
  ]

  constructor() { }

  addBeer(Beer) {
    this.beers.push(Beer);
  }

  delBeer(Beer) {
    console.log(Beer);
  }

}
