import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    let { id } = useParams();

    return (
        <p> The user is: {id}</p>
    );
}
export default User;