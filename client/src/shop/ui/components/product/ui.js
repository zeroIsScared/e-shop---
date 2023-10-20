
const Product = ({productObject}) => {   
  console.log( productObject)
    const {name,image, money:{amount, currency}} = productObject;
    console.log(name)
    console.log(amount)
    console.log(currency)
    return (
   <div>
    <h2>{name}</h2>
    <p>{amount} </p>
    <p>{currency} </p>
    <img src={image}></img>
  </div>
    )
}

export default Product;