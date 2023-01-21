import React from "react";

function Search({city, handleChange, name}){
    return(
        <div className="searchBar">
    <h1>Current Weather in {name}</h1>
    <div style={{display: 'flex', justifyContent: 'center'}}><input type="text" placeholder="Enter your City" onChange={handleChange} value={city} />
    </div>
    </div>
    )
}
export default Search;