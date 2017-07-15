import { Component } from '@angular/core';
import { Product, ProductImpl} from './product/product.interface';
import faker from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app';



  public products(): Array<{price: number, name: string, promoted: boolean}>  {
    return [
      {
        price: 12,
        name: 'Something',
        promoted: false
      },
      {
        price: 14,
        name: 'Something Else',
        promoted: true
      }
    ];
  };

  public productsObj(): Array<Product>  {
    var res = [];
    for(let i = 1; i< 10; i++) {
      res.push(new ProductImpl(faker.commerce.productName(), faker.commerce.price(), faker.random.boolean()));
    }

    return res;
  };

}
