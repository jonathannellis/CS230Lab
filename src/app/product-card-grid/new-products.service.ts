// Service that provides access to new product data stored on Firebase database.

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable({providedIn: 'root'})

export class NewProductsService {
    private baseUrl:string = 'https://candykeys-app-default-rtdb.firebaseio.com/';
    private tableName:string = 'new-products';
    private extension:string = '.json';


    constructor(private http:HttpClient) {
        
    }

    // Gets a list of products from the backend database.
    getNewProducts() {
        return this.http.get<Product[]>(this.baseUrl + this.tableName + this.extension);
    }

    // Adds a new product to the backend database.
    putNewProduct(newProduct:Product, index:number) {
        return this.http.put<Product>(this.baseUrl + this.tableName + "/" + index + this.extension, newProduct);
    }
}