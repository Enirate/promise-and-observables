import { Injectable } from '@angular/core';
import {Http} from '@angular/http';


import'rxjs/add/operator/map' //import a single operator, as few operators are added by default
import 'rxjs/Rx' //import all observable operators.

@Injectable()
export class ObserveService {

  constructor(private http:Http) { } 


  getPostObserve() {
    return this.http.get('http://jsonplaceholder.typicode.com/posts')
    .retry(5) //this operator will help fire our http request up to 5 times if initial requests fail
    .debounceTime(600) //not actually useful here, but shows how to chain observables operators. Debounce time will
    //delay the response from the server for the specified time(600 milliseconds in this case) and replace it with a 
    //new value if any is detected before the specified time. Good for autocomplete search forms. 
    .map(res =>res.json()) //Just like the normal map data tool, it turns each item of the observable to a Json string and 
    //roll them up into a json object
  }

}
