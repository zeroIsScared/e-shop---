


const Product = ({productObject}) => {   
  
    const {name,image} = productObject;
    
    return (
   <div>
    <h2>{name}</h2>    
    <img src={image} alt="product"></img>
  </div>
    )
}

export default Product;