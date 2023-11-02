import {Product} from './model.js';


export const getProducts = async () => {

    const getResponse = await fetch ('http://localhost:8000/');    
    const response = await getResponse.json();
    const  apiProducts = await response.products;     

    let products = [];   

   for (let product in await apiProducts ) {    
     products.push(new Product(apiProducts[product]));  
   }

   return products;
}


