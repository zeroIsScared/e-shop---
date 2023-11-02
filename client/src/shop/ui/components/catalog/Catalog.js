import Product from '../product/ui.js';
import {useState, useEffect} from 'react';
import { getProducts } from "../product/api.js";
import { v4 as uuidv4 } from 'uuid';
import IconButton from '../IconButton.js';
import Money from '../product/Money.js';
import heart from '../navBar/images/love.png';

const Catalog = () => {

    const [products, setProducts] = useState([]);    
  
    useEffect (() => {   
      const fetchData = async () => {
      const products= await getProducts();
      setProducts(products);              
      }    
   
      fetchData();    
    }, []);
 
    return (
        <ul className='catalog'>
          { products && products.map(item => <Product 
          key={uuidv4()} 
          productObject={item}
          >
            <Money price ={item.price}/>
            <IconButton image={heart} alt={'heartIcon'}/>
            </Product>)} 
        </ul>
    )
}

export default Catalog;
