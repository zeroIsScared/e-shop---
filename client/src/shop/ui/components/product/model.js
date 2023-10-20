class Money {
    constuctor ( id, amount, currency) {     
        this.id = id; 
        this.amount = amount;
        this.currency = currency;
    }
}

export class Product {
    constructor({id, name, image, price}) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.money = price;   
    }
}

