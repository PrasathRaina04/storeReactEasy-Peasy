import { Action, Thunk, action, thunk } from "easy-peasy";
import { Product } from "../../interface";

interface ProductState{     // variables
    productDetailes: Product; 
}

interface ProductActions{       // value setter  => function => action
    setProductDetailes: Action<this, Product>;
}


export interface ProductModel  extends ProductState , ProductActions{

}

export const productModel: ProductModel={
    
    productDetailes:[],
    
    setProductDetailes: action((state, productDetailes) => {
        state.productDetailes = productDetailes;
    }),
}