// Class Product for object holding all attributes of a single product.
export class Product {
    name:string;
    price:number;
    image:string;

    constructor({name, price, image} : {name:string, price:number, image:string}) {
        this.name = name;
        this.price = price;
        this.image = image;
    }
}