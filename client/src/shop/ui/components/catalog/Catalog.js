import Product from '../product/ui.js';
import {useState, useEffect} from 'react';
import { getProducts } from "../product/api.js";
import Money from '../money/ui.js';
import { v4 as uuidv4 } from 'uuid';

const Catalog = () => {
    const [products, setProducts] = useState([]);
    const [money, setMoney] = useState([]);
  
    useEffect (() => {   
      const fetchData = async () => {
       const productsData = await getProducts();
       setProducts(productsData[0]);    
       setMoney(productsData[1]);       
      }    
   
      fetchData();    
    }, []);
 
    return (
        <ul>
          { products && products.map(item =>  {
            return  (
            <li>
              <Product key={uuidv4()} productObject={item}/>
              <Money key={uuidv4()} productObject={item = money.find(element => element.id === item.id )}/>
            </li>
            )} )}         

        </ul>
    )
}

export default Catalog;
