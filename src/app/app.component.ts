import { Component, OnInit } from '@angular/core';
import { PromiseService } from './promise.service' //we import our promise class
import { ObserveService } from './observe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

postsThruPromise:any; //an empty variable decleared, it will hold our posts
postsThruObservable:any; //

constructor( private promiseService:PromiseService,
 private observeService:ObserveService) {}

ngOnInit(){

}


 getPostPromise() {
  this.promiseService.getPostsPromise()
  .then(response => this.postsThruPromise = response.json()) //.then() operator handled the returned value, 
  //it assigns it to a variable and converts it to json format
  .catch(err => console.log(err.message)) //.catch operator handles error, here it will log it in the console.
}

getPostObserve() {
  this.observeService.getPostObserve()
  .subscribe(response => this.postsThruObservable = response)
}





}
