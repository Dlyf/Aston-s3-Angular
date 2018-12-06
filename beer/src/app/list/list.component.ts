import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BeerService } from '../service/beer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  // beers: Object;
  beers:Object[];
  // constructor(private http: HttpClient, private beerService : BeerService) { }
  constructor(private beerService : BeerService) { }
  ngOnInit() {
    // this.getBeers()
    // .subscribe(data=>this.beers=data)
    // this.beers = this.beerService.beers;
    this.getBeers();
  }
  getBeers():void {
    this.beerService.getBeers()
    .subscribe(data=> this.beers = Object.values(data));
  }


  //.subscribe(data=>console.log(data));
  // getBeers() {
  //   return this.http.get('https://api.punkapi.com/v2/beers')
  // }



  delBeer(index) {
    this.beers.splice(index,1);
  }
}
