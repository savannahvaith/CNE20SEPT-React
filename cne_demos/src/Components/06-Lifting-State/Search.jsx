import React from 'react';

const Search = ({stateQuery, updateState}) => {
    
    return(
        <input type="text" value={stateQuery} onChange={updateState}/>
    )
}

export default Search; 