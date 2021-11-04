import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Product } from "./product.model";

@Injectable({
    providedIn: 'root'
})

export class DatabaseService {

    constructor(private db:AngularFireDatabase) {
        
    }

    public getNewProducts() {
        return this.db.list<Product>('new-products').valueChanges();
    }

    public putNewProduct(newProduct:Product) {
        this.db.list<Product>('new-products').push(newProduct);
    }

}