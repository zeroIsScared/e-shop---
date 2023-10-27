import Product from '../product/ui.js';
import {useState, useEffect} from 'react';
import { getProducts } from "../product/api.js";
import Money from '../Money/ui.js';

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
              <Product key={item.id} productObject={item}/>
              <Money key={`2${item.id}`}productObject={item = money.find(element => element.id === item.id )}/>
            </li>
            )} )}         

        </ul>
    )
}

export default Catalog;
