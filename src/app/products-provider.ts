import { Product, ProductImpl} from './product/product.interface';
import faker from 'faker';
import {Injectable} from "@angular/core";

@Injectable()
export class ProductsProvider {
    public products() {
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
}

