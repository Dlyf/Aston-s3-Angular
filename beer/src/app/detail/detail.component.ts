import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id:Number;
  biere: Object;
  constructor(private route: ActivatedRoute, private http: HttpClient) { 
    this.route.params
    .subscribe(params => this.id = params.id)
  }

  ngOnInit() {
    this.getBeerById()
    .subscribe(data=>{
      this.biere=data[0];
      console.log(this.biere);
    })

  }

  getBeerById(){
    return this.http.get('https://api.punkapi.com/v2/beers/'+this.id);
  }
}
