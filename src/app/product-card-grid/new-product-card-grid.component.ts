import { Component } from "@angular/core";
import { Product } from "./product.model";
import { NewProductsService } from "./new-products.service";
import { DatabaseService } from "./database.sevice";

@Component({
    selector: 'app-new-product-card-grid',
    templateUrl: 'new-product-card-grid.component.html',
    styleUrls: ['new-product-card-grid.component.css']
})
export class NewProductCardGridComponent {
    // List to hold all new products that will be displayed on homepage.
    productsToDisplay:Product[] = [];

    constructor(private newProductsService: DatabaseService) {

    }

    ngOnInit() : void {
        this.newProductsService.getNewProducts().subscribe((data:Product[]) => {
            /* 
                Objects in data list are already of type Product so creating new
                Products is not strictly necessary.  However, the Product constructor
                doesn't seem to ever run for Product objects saved to data.  Creating
                new Product objects ensures that the constructor is executed.
            */
            for (var product of data) {
                this.productsToDisplay.push(new Product(product));
            }
        });
    }
}