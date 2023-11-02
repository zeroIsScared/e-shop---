import classes from './catalogProduct.module.css';


const Product = (props) => {   
  
    const {name,image} = props.productObject;

    return (
   <li className={classes.productItem}>
    <div className={classes.imageContainer}>
    <img src={image} alt="product" className={classes.image} ></img>
    
    <h4 className={classes.productName}>{name}</h4> 
    </div>
    <div className={classes.priceContainer}>
    {props.children}  
    </div>
  </li>
    )
}

export default Product;