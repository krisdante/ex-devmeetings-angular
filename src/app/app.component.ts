import { Component, OnInit } from '@angular/core';
import { ProductImpl } from './product/product.interface';
import { Filter } from './filter.interface';
import { ProductsProvider } from './products-provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'app';
  private products: Array<ProductImpl>;
  public filterStr: string;
  private sortBy: Filter;

  constructor(productsProvider: ProductsProvider) {
    this.products = productsProvider.products();
  }

  ngOnInit() {
    this.filterStr = '';
  }

  public onFilterUpdated(event) {
    this.filterStr = event;
  }

  public onSort(event) {
    this.sortBy = event
  }

  public productsObj(): Array<ProductImpl>  {
    let res = this.products;
    // res = res.filter((item)=>{
    //   let where = item.name + item.price + item.tags.join();
    //   return where.toLocaleLowerCase().match(this.filterStr.toLocaleLowerCase())
    // });
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
