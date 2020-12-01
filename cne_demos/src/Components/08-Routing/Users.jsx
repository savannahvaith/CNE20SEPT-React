import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';


const Users = () => {
    let { id } = useParams();
    const [people, setPeople] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
            .then((res) => setPeople(res.data.data), (error) => setError(error));
    }, [])

    const objectPropsDisplay = [];
    
    for (let [k, v] of Object.entries(people)) {
        objectPropsDisplay.push(<li key={k}>The {k} is: {v}</li>)
    }


    if (error) {
        return <p>Something went wrong {error.message}</p>
    } else {
        return (
            <p>{objectPropsDisplay}</p>
        );

    }
}
    export default Users;