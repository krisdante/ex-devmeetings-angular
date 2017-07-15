import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { HelpPipe } from './help.pipe';
import { FilterPipe } from './filter.pipe';

import { ProductsProvider } from './products-provider'
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ProductsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
