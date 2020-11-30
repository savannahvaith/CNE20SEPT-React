import React from 'react';

const List = ({ list, stateQuery, check}) => {

    const byQuery = stateQuery => list => !stateQuery || list.title.toLowerCase().includes(stateQuery.toLowerCase());

    const checked = check => list => list.completed === !check;

    let filteredList; 
    
    if(check){
        filteredList = list.filter(checked(check)).filter(byQuery(stateQuery));
    }else{
        filteredList = list.filter(byQuery(stateQuery));
    }
    
    console.log(filteredList);

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