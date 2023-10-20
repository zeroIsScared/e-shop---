import Product from '../product/ui.js';
import {useState, useEffect} from 'react';
import { getProducts } from "../product/api.js";

const Catalog = () => {
    const [products, setProducts] = useState([]);
  
    useEffect (() => {   
      const fetchData = async () => {
       const _products = await getProducts();
       setProducts(_products);    
      }
      console.log(products);
   
      fetchData();    
    }, []);

    return (
        <>
          { products && products.map(item => <Product key={item.id} productObject={item}/>)}  

        </>
    )
}

export default Catalog;