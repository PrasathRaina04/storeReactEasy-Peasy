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
    productDetailes:[{
        productName: "",
        productNameTamil: "",
        productQuantity: 0,
        productSellingPrice: 0,
        productCostPrice: 0,
        productBrandName: "",
        productCategoryName: ""
    }],
    
    setProductDetailes: action((state, productDetailes) => {
        state.productDetailes = productDetailes;
    }),
}