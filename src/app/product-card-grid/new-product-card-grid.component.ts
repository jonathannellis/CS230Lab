import { Component } from "@angular/core";
import { Product } from "./product.model";
import { NewProductsService } from "./new-products.service";

@Component({
    selector: 'app-new-product-card-grid',
    templateUrl: 'new-product-card-grid.component.html',
    styleUrls: ['new-product-card-grid.component.css']
})
export class NewProductCardGridComponent {
    // List to hold all new products that will be displayed on homepage.
    productsToDisplay:Product[] = [];

    constructor(private newProductsService: NewProductsService) {

    }

    ngOnInit() : void {
        this.newProductsService.getNewProducts().subscribe((data:Product[]) => {
            /* 
                Objects in data list are already of type Product so creating new
                Products is not strictly necessary.  However, the Product constructor
                doesn't seem to run on Product objects created by the NewProductService.
                I rely on TS in the constructor so this ensures that is executed.
            */
            for (var product of data) {
                this.productsToDisplay.push(new Product(product));
            }
        });
    }
}