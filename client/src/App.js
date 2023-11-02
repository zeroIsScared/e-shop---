
import './App.css';
import Nav from './shop/ui/components/navBar/Nav.js';
import ProductBox from './shop/ui/components/productBox/ProductBox.js';
import Catalog from './shop/ui/components/productBox/Catalog.js';
import {useState, useEffect} from 'react';
import Wishlist from './shop/ui/components/productBox/wishList/Wishlist.js';
import { getProducts } from './shop/ui/components/productBox/product/api.js';





function App () {
  
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');
  const [desiredProducts, setDesiredProducts] = useState([]);;
  const [showWishList, setShowWishList] = useState(false);
  const [searchResults, setSearchResults] = useState(0);
        
  
  useEffect (() => {   
    const fetchData = async () => {

      if( query === '') {              
        const producstArray = await getProducts();        
        setProducts(producstArray);
        
      } else {     
        const productsObject= await fetch(`http://localhost:8000/product/${query}`);
        const products = await productsObject.json();
        const producstArray = await products.products;
        setProducts(producstArray);
        setSearchResults(producstArray.length);              
      } 
  }    
    fetchData();    
  }, [query]);
 
  const showWishListHandler = () => {
    setShowWishList( prev => !prev);    
  }

  const handleInputQuery = (e) => { 
   if (e.target.value.length >= 2 ||  e.target.value.length === 0) {
      setQuery(e.target.value);
  }        
} 

const addToWhishListHandler = (id) => {  
  const newProduct =products.find(item => item.id === id);

  if(desiredProducts.includes(newProduct) === false) {
    setDesiredProducts((prev) => {
    return [...prev, newProduct ] })
   }
} 

const deleteWishListItem = (id) => {
  setDesiredProducts( (prev) => {
    return prev.filter(item => item.id !== id);
  })
}
 
  return (
    <div className="App">
      <Nav wishListHandler = {showWishListHandler} 
        inputHandler = {handleInputQuery} 
        searchResults = {searchResults} />         
      <ProductBox>  
        <Catalog products = {products} addToWishList={addToWhishListHandler} />
        { showWishList &&  <Wishlist className ='wish-list-container' 
           deleteWishListItem = {deleteWishListItem}
           desiredProducts = {desiredProducts} /> }                
      </ProductBox>          
    </div>
  );
}

export default App;
