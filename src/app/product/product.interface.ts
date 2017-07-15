export interface Product {
    name: string,
    price: number,
}

export interface PromotedProduct{
    promoted: boolean
}

export interface TaggableProduct {
    tags: Array<string>;
}


export class ProductImpl implements Product, PromotedProduct, TaggableProduct {
    constructor(
        public name, public price, public promoted = false, public tags = []
    ) {};
}

