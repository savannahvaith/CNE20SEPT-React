import React from 'react';

const Individual = (props) => {

    const information = props.info; 
    console.log(information);

    return(
        <>
        <p key={props.id}>Hello {props.name}, i see you're from {props.city}</p>
        </>
    )
}

export default Individual;