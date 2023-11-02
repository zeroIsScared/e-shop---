import deleteImage from './images/trashIcon.png';

const DeleteButton = (props) => {
    
    return (        
        <button onClick= {()=> props.deleteHandler(props.id)}>
        <img src={deleteImage} alt='delete' className="wish-list"  ></img>
        </button>        
    )
}

export default DeleteButton;