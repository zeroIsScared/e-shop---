import {Product} from './model.js';
import {Money} from '../money/model.js';

export const getProducts = async () => {

    const getResponse = await fetch ('http://localhost:8000/');    
    const response = await getResponse.json();
    const  apiProducts = await response.products;     

    let products = [];
    let money = [];

   for (let product in await apiProducts ) {
    
     products.push(new Product(apiProducts[product]));  
     money.push(new Money(apiProducts[product].id,apiProducts[product].price ));

   }

   return [ products, money];
}


//     // [
//     //     {id:0, name: 'TV LG', price: {amount: 1000, currency: 'USD'}},
//     //     {id:1, name: 'IPad', price: {amount: 1200, currency: 'EUR'}},
//     //     {id:3, name: 'Iphone', price: {amount: 1600, currency: 'EUR'}}
//     // ];