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

  private productsProvider(): Array<ProductImpl> {
    let res = [];
    for(let i = 1; i< 50; i++) {
      let tags = [];
      for(let t = 1; t < Math.ceil(Math.random() * 4); t++) {
        tags.push(faker.hacker.noun());
      }

      let prod = new ProductImpl(faker.commerce.productName(), faker.commerce.price(), faker.random.boolean(), tags);
      res.push(prod);
    }
    return res;
  }

  public productsObj(): Array<Product>  {
    let res = this.productsProvider();

    let promoted = res.filter((item) => item.promoted);
    let normal = res.filter((item) => !item.promoted);

    res = [];
    res.push(...promoted);
    res.push(...normal);
    return res;
  };

}
