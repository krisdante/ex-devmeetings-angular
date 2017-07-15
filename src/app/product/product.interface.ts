export interface Product {
    name: string,
    price: number,
}

export interface PromotedProduct {
    promoted: boolean
}


export class ProductImpl implements Product, PromotedProduct {
    constructor(
        public name, public price, public promoted
    ) {};
}

