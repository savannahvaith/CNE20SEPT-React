import React, { useState } from 'react';
import list from './Info.json';
import List from './List';
import Search from './Search';

const SearchableList = () => {

    const [query, setQuery] = useState(``);
    const [check, setCheck] = useState(false);
    
    const handleQuery = e => {
        setQuery(e.target.value);
    }
    const handleCheck = e => {
        setCheck(!check);
    }

    return (
        <div>
            <Search stateQuery={query} updateState={handleQuery} updateCheck={handleCheck} />
            <List list={list} stateQuery={query} check={check}/>
        </div>
    )
}

export default SearchableList; 