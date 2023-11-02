import Search from './Search.js';
import SearchResult from './SearchResult.js';
import logo from './images/logo.jpg'; 
import heart from './images/love.png'; 

 
const Nav = (props) => {

    const { inputHandler, searchResults} = props;

    return (
        <div className="Nav">
            <div className="Logo">
              <img src={logo} alt ="logo"></img>
            </div>        
            <div className='search-container'>
              <Search change={(e) => inputHandler(e)} />
              <SearchResult searchResults={searchResults} />
              <button className='wish-button' onClick = {props.wishListHandler}>
              <img className='wish-button' src={heart} alt ="heart"></img>
              </button>
           </div>
        </div>
    )
}

export default Nav;