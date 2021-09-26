import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-product-card',
    templateUrl: 'product-card.component.html',
    styleUrls: ['product-card.component.css']
})
export class ProductCardComponent {
    // Default values given so that cards used previously in the semester continue to work.  If removed
    // put an exclamation mark after attribute name.
    @Input() productName:string = "SA Polyclear";
    @Input() productPrice:number = 21;
    @Input() productImage:string = "/assets/images/product/sa-polyclear.webp";
}