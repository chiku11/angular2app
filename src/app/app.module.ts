import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'

import {HttpClient} from '@angular/common/http'

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products-list.component';
import {ConvertToSpacePipe} from './shared/convert-to-space'



import {StarComponent} from './shared/star.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ConvertToSpacePipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
