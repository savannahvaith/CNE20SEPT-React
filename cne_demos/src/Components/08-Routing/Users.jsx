import React from 'react';
import { useParams } from 'react-router-dom';


const Users = () => {
    let {id} = useParams();

return( 
    <h1> The value from params is: {id}</h1>
 );
}
export default Users;