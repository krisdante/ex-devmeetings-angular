import { Product, ProductImpl} from './product/product.interface';
import faker from 'faker';
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductsProvider {
    private http: Http;
    constructor(http: Http) {
        this.http = http;
    }

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

    public productPromise() : Promise<ProductImpl[]> {
        return this.http.get('/assets/products.json').toPromise().then(res=>res.json() as ProductImpl[]);
    }

    public productsGet(callset: any) {
        this.http.get('/assets/products.json').subscribe(x => {
            let xx = x.json();
            callset.length=0;
            callset.push(...xx);
        });
    }

    public productsObservable() {
        return this.http.get('/assets/products.json');
    }


}

