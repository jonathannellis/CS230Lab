import { Component } from "@angular/core";
import { NewProductsService } from "../product-card-grid/new-products.service";
import { Product } from "../product-card-grid/product.model";


@Component({
    selector: 'app-add-product',
    templateUrl: 'add-product.component.html'
})
export class AddProductComponent {
    productList: Product[] = [];

    constructor(private newProductsService: NewProductsService) {

    }

    ngOnInit() : void {
        this.getProductList();
    }


    getProductList() : void {
        this.newProductsService.getNewProducts().subscribe((data:Product[]) => {
            this.productList = [];
            for (var product of data) {
                this.productList.push(new Product(product));
            }
        });
    }

    addProduct(data:Product) {
        // Default Initial Rating
        data.rating = 0;
        
        // Submit product at first empty index.
        this.newProductsService.putNewProduct(data, this.productList.length).subscribe(data => {
            if (data != undefined)
                this.productList[this.productList.length] = data;
        });
    }
}