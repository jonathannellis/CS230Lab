import { Component } from "@angular/core";

@Component({
    selector: 'app-product-card',
    templateUrl: 'product-card.component.html',
    styleUrls: ['product-card.component.css']
})
export class ProductCardComponent {
    productName:string = "MW PBT 02 & 015 Deskmats";
    productPrice:number = 23;
    productImage:string = "https://ucarecdn.com/8b3b457f-3b2c-46eb-a29e-fa07b308b7be~4/nth/0/-/scale_crop/250x250/-/format/auto/-/quality/smart/-/resize/626x/";
}