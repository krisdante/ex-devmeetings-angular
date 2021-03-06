import {Component, Input, OnInit} from '@angular/core';
import {Product} from './product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  @Input() public product: Product;

  ngOnInit() {
  }

}
