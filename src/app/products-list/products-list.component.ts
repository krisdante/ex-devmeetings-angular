import {Component, Input, OnInit} from '@angular/core';
import {Product} from './../product/product.interface';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor() { }

  @Input() public products: Array<Product>;

  ngOnInit() {
  }

}
