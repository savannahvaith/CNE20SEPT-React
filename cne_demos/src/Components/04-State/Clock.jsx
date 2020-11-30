import React, {useState} from 'react'; 
import { useEffect } from 'react';

const Clock2 = () => {

    let [date,setDate] = useState(new Date().toLocaleTimeString());

    useEffect( () => {
        setInterval(
            tick, 1000
        )
    })

    function tick(){
        setDate(date = new Date().toLocaleTimeString());
    }

    
    return(
        <>
        <h1> What time is it?</h1>
        <p>It is {date}</p>
        </>
    )
}

export default Clock2; 