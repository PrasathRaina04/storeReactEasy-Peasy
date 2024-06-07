import { Action, Thunk, action, thunk } from "easy-peasy";
import { ProductLists } from "../../interface";

interface ProductListsState{     // variables
    productDetailes: ProductLists; 
}

interface ProductListsActions{       // value setter  => function => action
    setProductDetailes: Action<this, ProductLists>;
}


export interface ProductListsModel extends ProductListsState, ProductListsActions{

}

export const ProductListsModel: ProductListsModel={
    productDetailes: {},
    
    setProductDetailes: action((state, productDetailes) => {
        state.productDetailes = productDetailes;
    }),
}