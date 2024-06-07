import { createStore as createEasyPeasyStore } from "easy-peasy";
import { HttpService } from "../services/http/http.service";
import { BrandModel, brandModel } from "./Models/brand/brand.model";
import { SignUpModel, signUpModel } from "./Models/signUp/SignUp.model";

import { ProductListsModel } from "./Models/product/product.model";


export interface AppStoreModel{
brandModel: BrandModel;
signUpModel: SignUpModel;
productListsModel: ProductListsModel;
}
export const appStoreModel: AppStoreModel ={
   brandModel : brandModel,
   signUpModel: signUpModel,
   productListsModel: productListsModel;
}

function createStore(defaultValues?: any){
    return createEasyPeasyStore(appStoreModel,{
        injections:{
            httpService: new HttpService(),
        },
        initialState:{
            ...defaultValues,
        },
    });
}

export const store =createStore();