import { Injectable } from '@angular/core';
import { Beer } from '../beer';
import { throwError as ObservableThrowError, Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})

export class BeerService {

  beers:Object[]; 
    // = [
    // {
    //   "name": 'Glouglou',
    //   "price": 23.34
    // },
    // {
    //   "name": 'Cool',
    //   "price": 30.20
    // },
    // {
    //   "name": 'Tropical',
    //   "price": 13.10
    // },
    // {
    //   "name": 'Red',
    //   "price": 5.14
    // },

    // new Beer("salut", 20, "Dom"),
    // new Beer("hello", 20, "Dom"),
    // new Beer("salut", 20, "Dom"),
    // new Beer("salut", 20, "Dom"),
    
  // ]

  constructor(private http: HttpClient) { }

  getBeers():Observable<Beer[]> {
    return this.http.get<Beer[]>('https://aston-cf626.firebaseio.com/beers.json')
    .pipe(
      tap(data => data),
      catchError(this.handleError('getBeers', []))
    );
  }
  //Ajout de bieres
 addBeer(obj){
  let beer = new Beer(obj.name, obj.brand, obj.degree);
  this.http
  .post('https://aston-cf626.firebaseio.com/beers.json',beer,httpOptions)
  .subscribe(
    ()=> {
      console.log('ça marche');
    });

  }

  // addBeer(Beer) {
  //   this.beers.push(Beer);
  // }

  delBeer(index) {
    this.beers.splice(index, 1);
  }

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return (error);
    };
  }

 

}
