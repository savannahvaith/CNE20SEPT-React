import React, { useState } from 'react';
import list from './Info.json';
import List from './List';
import Search from './Search';

const SearchableList = () => {

    const [query, setQuery] = useState(``);
    const handleQuery = e => {
        setQuery(e.target.value);
    }

    return (
        <div>
            <Search stateQuery={query} updateState={handleQuery} />
            <List list={list} stateQuery={query}/>
        </div>
    )
}

export default SearchableList; 