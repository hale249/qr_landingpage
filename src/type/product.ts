export type Product = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    discountPrice: number;
};

export type IProduct = {
    id?: string;
    name: string;
    code?: string;
    price: string;
    slug: string;
    note?: string;
    image: string;
    images?: Array<string>;
    packing?: string;
    dosage?: string;
    unit?: IUnit,
    brand?: IBrand,
    product_category?: ICategory,
}

export type ILangPageProduct = {
    product: IProduct,
    suggests: Array<IProduct>
}

export type IUnit = {
    id?: number;
    name: string;
    ShortName: string;
}

export type IBrand = {
    id?: number,
    name?: string,
    description?: string,
}

export type ICategory = {
    id?: number,
    name?: string,
}
