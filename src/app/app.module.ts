import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { PromiseService } from './promise.service'; //import service class
import { ObserveService } from './observe.service'; //import service class

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    PromiseService, //we declare promise service as a provider after importing it
    ObserveService  //we declare our observable service as a provider after importing it
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
