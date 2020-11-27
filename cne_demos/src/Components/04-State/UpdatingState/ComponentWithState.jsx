import React, {useState} from 'react';
import CountUser from './CountUser';

const ComponentWithState = () => {

    const [count, setSomethingIWantTodo] = useState(5);
   
    function update(){
        setSomethingIWantTodo(count+1);
        console.log("I was called, and now i'm going to make an ajax call");
    }


    return(
        <>
        <p>The current value of count state is: {count}</p>
        <button onClick={ update}> Add 1 to count</button>
        <hr/>
        <CountUser countProp={count}/>
        </>
    );




}

export default ComponentWithState; 