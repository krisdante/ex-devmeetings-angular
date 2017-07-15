import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { HelpPipe } from './help.pipe';
import { FilterPipe } from './filter.pipe';

import { ProductsProvider } from './products-provider'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
