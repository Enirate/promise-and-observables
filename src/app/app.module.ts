import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { PromiseService } from './promise.service'; //import service class
import { ObserveService } from './observe.service';

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
    PromiseService, //we declear our promise as a provider after importation
    ObserveService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
