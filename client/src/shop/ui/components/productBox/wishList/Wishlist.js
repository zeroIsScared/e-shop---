
import { v4 as uuidv4 } from 'uuid';
import Money from '../product/Money.js';
import DeleteButton from './DeleteFromWishListButton.js';
import Product from '../product/Product.js';

const Wishlist = (props) => { 

    const {desiredProducts, deleteWishListItem} = props;

    return (
        <ul className='wish-list-container'>
          <div className='wishlist'>
             <h5>You have <strong> {desiredProducts.length} </strong> items in your wish list</h5>
              {desiredProducts.length > 0 ? (desiredProducts.map( item => <Product 
              key={uuidv4()} 
              productObject={item}            
              >
              <Money price={item.price}/>
              <DeleteButton deleteHandler = {deleteWishListItem} id={item.id}/>
              </Product>) ) : <h4>There are no products in your wish list!</h4>}          
              </div>         
        </ul>
    )
}

export default Wishlist;