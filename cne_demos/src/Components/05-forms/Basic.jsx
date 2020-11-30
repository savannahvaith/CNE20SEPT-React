import React from 'react';

const Basic = () => {
    return (
        <>
            <form>
                <label>Name:</label>
                <input type="text" name="name"/>
                <input type="submit" value="submit"/>
            </form>
        </>
    )
}

// this code will submit information as a GET request - append the form data to the url 
// and it goes to some location...
export default Basic;