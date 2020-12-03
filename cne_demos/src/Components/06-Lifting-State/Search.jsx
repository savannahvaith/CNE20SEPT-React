import React from 'react';

const Search = ({ stateQuery, updateState , check, updateCheck}) => {

    return (
        <>
            <input type="text" value={stateQuery} onChange={updateState, updateCheck} />
            <label> Only show Uncompleted tasks:</label>
            <input type="checkbox" checked={check} onChange={updateCheck} />
        </>
    )
}

export default Search; 