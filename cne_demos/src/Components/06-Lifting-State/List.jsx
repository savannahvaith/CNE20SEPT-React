import React from 'react';

const List = ({ list, stateQuery}) => {

    const byQuery = stateQuery => list => !stateQuery || list.title.toLowerCase().includes(stateQuery.toLowerCase());

    const filteredList = list.filter(byQuery(stateQuery));

    return (
        <>
            {filteredList.map((user) => (
                <div key={user.id}>
                    <h2>{user.title}</h2>
                    <input type="checkbox" checked={user.completed} readOnly/>
                </div>
            ))}
        </>
    )

}

export default List; 