import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constatnt/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


  getAllCategory(){
    return this.http.get(Constant.API_END_POINT+Constant.METHODS.GET_ALL_CATEGORY)
  }

  addProduct(obj:any){
    return this.http.post(Constant.API_END_POINT+Constant.METHODS.CREATE_PRODUCT,obj)
  }

  getAllProduct(){
    return this.http.get(Constant.API_END_POINT+Constant.METHODS.GET_ALL_PRODUCTS)
  }

  updateProduct(obj:any){
    return this.http.post(Constant.API_END_POINT+Constant.METHODS.UPADATE_PRODUCT,obj)
  }

  deleteProduct(id:any){
    return this.http.get(Constant.API_END_POINT+Constant.METHODS.DELETE_PRODUCT + id)
  }


  
}
