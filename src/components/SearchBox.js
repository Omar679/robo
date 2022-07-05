import React from "react";



const SearchBox = ({searchfield, searchChange}) => {
    return(
        <div className="p2">
            <input  type = 'search' 
            className="p3 ba b--green bg-lightest-blue"
            placeholder="Search Robots"
            onChange = {searchChange}
            />
        </div>
    )

}
export default SearchBox