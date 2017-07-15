import { Component, OnInit } from '@angular/core';
import { Product, ProductImpl} from './product/product.interface';
import faker from 'faker';
import { Filter } from './filter.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'app';
  private products: Array<ProductImpl>;
  private filter: string;
  private sortBy: Filter;

  ngOnInit() {
    this.products = this.productsProvider();
    this.filter = '';
  }

  public onFilterUpdated(event) {
    this.filter = event;
  }

  public onSort(event) {
    this.sortBy = event
  }

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
    let res = this.products;
    res = res.filter((item)=>{
      let where = item.name + item.price + item.tags.join();
      return where.toLocaleLowerCase().match(this.filter.toLocaleLowerCase())
    });
    if(this.sortBy) {
      switch (this.sortBy.field) {
        case 'price':
          res.sort((item1, item2) => {
            if(this.sortBy.ascending) {
              return parseFloat(item1.price) > parseFloat(item2.price) ? 1 : -1;
            } else {
              return parseFloat(item1.price) < parseFloat(item2.price) ? 1 : -1;
            }
          });
          break;

        case 'name':
          res.sort((item1, item2) => {
            if(this.sortBy.ascending) {
              return item1.name > item2.name ? 1 : -1;
            } else {
              return item1.name < item2.name ? 1 : -1;
            }
          });
          break;
      }
    }
    let promoted = res.filter((item) => item.promoted);
    let normal = res.filter((item) => !item.promoted);

    res = [];
    res.push(...promoted);
    res.push(...normal);
    return res;
  };

}
