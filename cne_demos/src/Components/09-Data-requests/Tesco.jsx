import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import Human from './Human';

const Tesco = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setLoaded] = useState(false);
    const [humans, setHumans] = useState([]);

    useEffect(() => {

        // setTimeout( () => { // dosomething } , //timeinMS );

        setTimeout(() => {
        axios.get("http://dummy.restapiexample.com/api/v1/employees")
            // .then(res => res)
            .then((hello) => {
                setLoaded(true);
                console.log(hello);
                setHumans(hello.data.data);
            }, (error) => {
                setLoaded(true);
                setError(error);
            })
        }, 4000)
    }, [])

    if (error) {
        return <p>Oops.. something has happened... {error.message}</p>
    } else if (!isLoaded) {
        return (
            <>
                <p> Please wait.... we are loading your information</p>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </>
        )
    } else {
        return (
            <>
                <p>Information loaded</p>
                {humans.map((person) => (
                    <Human key={person.id} obj={person} />
                ))}
            </>
        )
    }
}

export default Tesco; 
