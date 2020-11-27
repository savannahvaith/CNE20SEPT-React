import React, { useState, useEffect } from 'react';
import Child from './Child';


const Car = () => {

    const [brand, setBrand] = useState("BMW");
    const [model, setModel] = useState("M4");
    const [colour, setColour] = useState("Blue");
    const [year, setYear] = useState(2020);
    const [showDetails, setShowDetails] = useState(false);

    function callMe(e) {
        e.preventDefault();
        console.log(showDetails);
        setShowDetails(true);
    }

    useEffect( () => {

        setTimeout( () => { setShowDetails(false)}, 5000);
    });

    return (
        <>
            <form>
                <label> Brand:</label>
                <input
                    type="text"
                    value={brand}
                    onChange={e => setBrand(e.target.value)} />
                <label> Model: </label>
                <input
                    type="text"
                    value={model}
                    onChange={e => setModel(e.target.value)} />
                <label>
                    colour
                </label>
                <select onClick={e => setColour(e.target.value)}>
                    <option defaultValue={colour}>{colour}</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                </select>
                <label>Year</label>
                <input
                    type="text"
                    value={year}
                    onChange={e => setYear(e.target.value)} />
                <button type="submit" onClick={callMe}>Submit</button>
            </form>
            { showDetails ? <p> {brand}, {model}, {colour}, {year} </p> : <></>}
        </>
    )
}

export default Car; 