import { createStore as createEasyPeasyStore } from "easy-peasy";
import { HttpService } from "../services/http/http.service";
import { BrandModel, brandModel } from "./Models/brand/brand.model";
import { SignUpModel, signUpModel } from "./Models/signUp/SignUp.model";
import { ProductModel , productModel } from "./Models/product/Product.model";

// import { ProductModel } from "./Models/product/product.model";


export interface AppStoreModel{
brandModel: BrandModel;
signUpModel: SignUpModel;
productModel: ProductModel;
}
export const appStoreModel: AppStoreModel ={
   brandModel : brandModel,
   signUpModel: signUpModel,
   productModel: productModel,
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