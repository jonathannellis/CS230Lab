// Service that provides access to new product data stored on Firebase database.

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable({providedIn: 'root'})

export class NewProductsService {
    private baseUrl:string = 'https://candykeys-app-default-rtdb.firebaseio.com/';
    private endpoint:string = 'new-products.json';

    constructor(private http:HttpClient) {
        
    }

    getNewProducts() {
        return this.http.get<Product[]>(this.baseUrl + this.endpoint);
    }
}