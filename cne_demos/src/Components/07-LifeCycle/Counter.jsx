import React, { useState, useEffect } from 'react'; 

const Counter = () => {

    const [count, setCount] = useState(0);

    useEffect( () => {
        document.title = `Clicked ${count} times`;
        console.log(`finalCount: ${count}`); 
    });

    const increment = () => {
        setCount(count => count +1);
    }

    function decrement(){
        setCount(count => count-1);
    }

    return(
        <>
            <p> Click count: {count}</p>
            <button onClick={increment}> ++ </button>
            <button onClick={decrement}> -- </button>
        </>
    ); 

}

export default Counter; 