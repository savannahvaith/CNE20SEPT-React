import React from 'react'; 

const Second = () => { 

    const date = new Date();
    const localString = `Savannah Vaith`;
    const firstName = "sav"; 
    const lastName = "vaith";

    return(
        <>
            <p>Hello friends! Nice to see you</p>
            <p>This component was created on {date.toLocaleDateString()}</p>
            <p>{localString}</p>
            <h1>Hello firstName + " " + lastName ! </h1>
            <h1> Hello {firstName} {lastName}</h1>
            <p> {date.getHours()}</p>
            <h1> It is currently {date.getHours() % 12} 0'clock</h1>
            <h1> { `${firstName}` }</h1>
        </>

    );
}

export default Second;
