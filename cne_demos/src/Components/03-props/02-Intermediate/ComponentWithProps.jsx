import React from 'react';

const ComponentWithProps = (props) => {
    console.log(props);
    const { valueProp, objectProp, arrayProp, functionProp, headerText, numericProp} = props;

    // printing an object
    const objectPropsDisplay = []; 
    for(let [k, v] of Object.entries(objectProp)){
        objectPropsDisplay.push(<li key={k}>The value of {k} in the objectProp is {v}</li>)
    }

    // loop through the array and create its own list item 
    const number = arrayProp.map(seq => <li key={seq}>Number is {seq}</li>);

    return(
        <>
            <h1>{headerText}</h1>
            <h1>{props.headerText}</h1>
            <p>The value of the numeric prop is: {numericProp}</p>
            <p> The value of the valueProp is : {valueProp}</p>
            <ol>{objectPropsDisplay}</ol>
            <ol>
                {number}
            </ol>
            <p> FunctionProp returns: {functionProp()}</p>
        </>
    );

}

export default ComponentWithProps; 