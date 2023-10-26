
const Product = ({productObject}) => {   
  
    const {name,image, money:{amount, currency}} = productObject;
    
    return (
   <li>
    <h2>{name}</h2>
    <p>{amount} </p>
    <p>{currency} </p>
    <img src={image} alt="product"></img>
  </li>
    )
}

export default Product;