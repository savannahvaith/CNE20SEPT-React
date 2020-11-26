import React from 'react'; 
import Individual from './Individual';
import People from './People.json';

const User = () => {

    console.log(People);
    return( 
        <>
        {
            People.map( (person) => (
                // <p key={person.id}>Hello {person.name}, i see you're from {person.address.city}</p>
                <Individual key={person.id} name={person.name} city={person.address.city} info={person}/>
            ))
        }
        </>

    )

}

export default User; 
