import Product from '../product/ui.js';
import {useState, useEffect} from 'react';
import { getProducts } from "../product/api.js";

const Catalog = () => {
    const [products, setProducts] = useState([]);
  
    useEffect (() => {   
      const fetchData = async () => {
       const products = await getProducts();
       setProducts(products);    
      }    
   
      fetchData();    
    }, []);

    return (
        <ul>
          { products && products.map(item => <Product key={item.id} productObject={item}/>)}  

        </ul>
    )
}

export default Catalog;
