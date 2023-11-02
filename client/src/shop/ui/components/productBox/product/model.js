export class Money {
    constructor ( {amount, currency}) {        
        this.amount = amount;
        this.currency = currency;
    }
}

export class Product {
    constructor({id, name,image, price}) {
        this.id = id;
        this.name = name;
        this.image = image; 
        this.price =  new Money(price);
    }
}

