// Class Product for object holding all attributes of a single product.
export class Product {
    name:string;
    price:number;
    image:string;
    status:string;
    rating:number = 0;
    statusColor:string = "";
    statusVisibility:string = "invisible";
    stars:number[] = [0,0,0,0,0];

    constructor({name, price, image, status, rating} : {name:string, price:number, image:string, status:string, rating:number}) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.status = status;
        this.rating = rating;
        
        if (this.status == "In stock") {
            this.statusColor = "";
            this.statusVisibility = "invisible";
        }
        else if (this.status == "Preorder") {
            this.statusColor = "bg-dark";
            this.statusVisibility = "visible";
        }
        else {
            this.statusColor = "bg-warning";
            this.statusVisibility = "visible";
        }

        // Create an array containing numeric value of each star in product rating (1 = full star, 0.5 = half star, 0 = zero star)
        for (var i = 0; i < 5; i++) {
            if (this.rating >= 1) {
                this.stars[i] = 1;
                this.rating--;
            }
            else if (this.rating >= 0.5) {
                this.stars[i] = 0.5;
                this.rating = this.rating - 0.5;
            }
            else {
                this.stars[i] = 0;
            }
        }
    }
}