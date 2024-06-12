

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


export interface SignUp{
            fName?:string,
            lName?:string,
            mNumber?:number,
            emailId?:string,
            address?:string,
            pincode?:number,
            password?:string,
}
export interface Product{
    productID?: number,
    productNameEng?: string,
    productNameTn?: string,
    productKgs?:string,
    productQty?:number,
    productPrice?: number,
}