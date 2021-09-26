import { Component } from "@angular/core";
import { Product } from "./product.model";
import { newProducts } from "./new-products"

@Component({
    selector: 'app-new-product-card-grid',
    templateUrl: 'new-product-card-grid.component.html',
    styleUrls: ['new-product-card-grid.component.css']
})
export class NewProductCardGridComponent {
    // List to hold all new products that will be displayed on homepage.
    productsToDisplay:Product[] = [];

    constructor() {
        // Iterate through each element in newProducts and add it to productsToDisplay
        for (var currentProduct of newProducts) {
            this.productsToDisplay.push(new Product(currentProduct));
        }
    }
}