
import { BrandModel, brandModel } from "../Models/brand/brand.model";
import { SignUpModel, signUpModel } from "../Models/signUp/SignUp.model";
import { ProductModel, productModel } from "../Models/product/Product.model";
import { JsonModel, jsonModel } from "../Models/jsonPractice/jsonPractice.model";



export interface AppStoreModel{
    productModel: ProductModel,
brandModel: BrandModel;
signUpModel: SignUpModel;
jsonModel: JsonModel;

}
export const appStoreModel: AppStoreModel ={
    productModel: productModel,
   brandModel : brandModel,
   signUpModel: signUpModel,
   jsonModel:jsonModel,

}

