// Class Product for object holding all attributes of a single product.
export class Product {
    name:string;
    price:number;
    image:string;
    status:string;
    statusColor:string;
    statusVisibility:string;

    constructor({name, price, image, status} : {name:string, price:number, image:string, status:string}) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.status = status;

        if (status == "In stock") {
            this.statusColor = "";
            this.statusVisibility = "invisible";
        }
        else if (status == "Preorder") {
            this.statusColor = "bg-dark";
            this.statusVisibility = "visible";
        }
        else {
            this.statusColor = "bg-warning";
            this.statusVisibility = "visible";
        }
    }
}