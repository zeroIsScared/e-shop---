import heart from '../navBar/images/love.png';
import { v4 as uuidv4 } from 'uuid';
import Product from './product/Product.js';
import Money from './product/Money.js';
import IconButton from './wishList/HeartAddToWishListButton.js';

const Catalog = (props) => { 

    return (
        <ul className='catalog'>

          { props.products && props.products.map(item => 
            <Product  key={uuidv4()}  productObject={item}>
            <Money price ={item.price}/>
            <IconButton  click={ props.addToWishList} id={item.id} image={heart} alt={'heartIcon'}/>
            </Product>)
          }
        
        </ul>
    )
}

export default Catalog;
