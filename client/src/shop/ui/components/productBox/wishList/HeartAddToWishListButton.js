

const IconButton = (props) => {
    
    return (        
        <button onClick= {()=> props.click(props.id)}>
        <img className="wish-list" src={props.image} alt={props.alt} ></img>
        </button>        
    )
}

export default IconButton;