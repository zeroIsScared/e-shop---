
const Search = (props) => {
    return <input  type="search" placeholder="Search here ..." onChange={(e) => props.change(e)}/>
}

export default Search;