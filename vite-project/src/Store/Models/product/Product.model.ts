import { Action,  action } from "easy-peasy";
import { Product } from "../../interface";

interface ProductState{     // variables
    productDetailes: Array<Product>; 
}

interface ProductActions{       // value setter  => function => action
    setProductDetailes: Action<this, Array<Product>>;
}


export interface ProductModel  extends ProductState , ProductActions{

}

export const productModel: ProductModel={
    productDetailes:[],
    
    setProductDetailes: action((state, productDetailes) => {
        state.productDetailes = productDetailes;
    }),
}

















