import { Component } from "@angular/core";
import { Product } from "../product-card-grid/product.model";
import { DatabaseService } from "../product-card-grid/database.sevice";


@Component({
    selector: 'app-add-product',
    templateUrl: 'add-product.component.html'
})
export class AddProductComponent {
    productList: Product[] = [];

    constructor(private databaseService:DatabaseService) {

    }

    ngOnInit() : void {
        this.getProductList();
    }


    getProductList() : void {
        this.databaseService.getNewProducts().subscribe((data:Product[]) => {
            this.productList = [];

            for (var product of data) {
                // Creating new product guarantees constructor is run for each product.
                this.productList.push(new Product(product));
            }
        });

    }

    addProduct(data:Product) {
        // Initialize new rating.
        data.rating = 0;
        
        // Push to backend database.
        this.databaseService.putNewProduct(data);
    }
}