

export interface Brand {
    id?:number;
    brandName?:string;
    brandNameTamil?:string;
}

export interface Category
{
    id?:number,
   categoryName:string,
   categoryNameTamil:string
}
export interface Product
{
    id?:number,
   productName:string,
   productNameTamil:string,
   productQuantity:number,
   productSellingPrice:number,
   productCostPrice:number,
   productBrandName:string,
   productCategoryName:string
}

export interface SignUp{
            fName?:string,
            lName?:string,
            mNumber?:number,
            emailId?:string,
            address?:string,
            pincode?:number,
            password?:string,
}
export interface ProductLists{
    productID?: number,
    productNameEng?: string,
    productNameTn?: string,
    productKgs?:string,
    productQty?:number,
    productPrice?: number,
}