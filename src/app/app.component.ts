import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
items:Array<string>;
urls:Array<string>;
constructor(private wikipediaService:WikipediaService) {}

search(term) {
  this.wikipediaService.search(term)
  .then(items => {this.items = items[1];
    console.log(items)})
 // .then(items => this.urls = items[2])
  .catch(err => console.log(err));
}
}
