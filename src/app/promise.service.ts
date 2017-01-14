import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class PromiseService {

  constructor(private http:Http) { }   //injecting http as a dependency

  getPostsPromise() {
    return this.http.get('http://jsonplaceholder.typicode.com/posts') //hitting an external server with http request.
    .toPromise() //change return type from default observable<response> to promise<response> so that we can mimic a promise
    //asyn operation and implement promise operators
  }

}
