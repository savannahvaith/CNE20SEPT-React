import React, { useState } from 'react';

const ComponentWithControlledInput = () => {

    const [username, setUsername] = useState(`someName`);

    const handleSubmit = (event) => {
        event.preventDefault() // stops http requests from being made
        const dataToSend = JSON.stringify({username});
        console.log(dataToSend);
    }

    return (
        <>
            <form onSubmit={event => handleSubmit(event)}>
                <label>Name:</label>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input type="submit" value="Click me"/>
            </form>
        </>
    )
}

export default ComponentWithControlledInput;