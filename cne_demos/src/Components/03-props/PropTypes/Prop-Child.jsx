import React from 'react';
import PropTypes from 'prop-types';

const PropChild = (props) => {

    console.log(props);
    const { valueProp, objectProp, arrayProp, functionProp, headerText, numericProp } = props;

    // printing an object
    const objectPropsDisplay = [];
    for (let [k, v] of Object.entries(objectProp)) {
        objectPropsDisplay.push(<li key={k}>The value of {k} in the objectProp is {v}</li>)
    }

    // loop through the array and create its own list item 
    const number = arrayProp.map(seq => <li key={seq}>Number is {seq}</li>);

    return (
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

PropChild.defaultProps = {
    headerText: `This is the default content, if none is supplied`
}


PropChild.propTypes = {
    numericProp: PropTypes.number,
    functionProp: PropTypes.func,
    valueProp: PropTypes.number,
    arrayProp: PropTypes.array,
    headerText: PropTypes.string.isRequired,
    objectProp: PropTypes.shape({
        key1: PropTypes.string,
        key2: PropTypes.number,
        key3: PropTypes.array
    })
}

export default PropChild;