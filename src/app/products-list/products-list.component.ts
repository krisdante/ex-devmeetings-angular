import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Product} from './../product/product.interface';
import {Filter} from '../filter.interface';
import {current} from "codelyzer/util/syntaxKind";
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {

  constructor() {
  }

  public filteredProducts: Array<Product>;
  public givenProducts: Array<Product>;
  public currentSort: Filter;

  @Input() set products(products : Array<Product>) {
    this.filteredProducts = this.givenProducts = products;
  };

  @Output() filterUpdated = new EventEmitter();
  @Output() sortUpdated = new EventEmitter();

  public filterProducts(event) {
      let val = event.target.value;
      this.filterUpdated.emit(val);
  }

  public sort(field) {
    if(this.currentSort.field == field) {
      this.currentSort.ascending = !this.currentSort.ascending;
    } else {
      this.currentSort = {
        field: field,
        ascending: true
      };
    }
    this.sortUpdated.emit(this.currentSort);
  }

  ngOnInit() {
    this.currentSort = {
      field: 'name',
      ascending: true
    }
  }

}
