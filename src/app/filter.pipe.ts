import { Pipe, PipeTransform } from '@angular/core';
import { Product, ProductImpl} from './product/product.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<ProductImpl>, args?: any): any {
    return value.filter((item) => {
      let where = item.name + item.price + item.tags.join();
      return where.toLocaleLowerCase().match(args.toLocaleLowerCase())
    });
  }

}
