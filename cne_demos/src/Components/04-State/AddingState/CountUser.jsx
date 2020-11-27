import React from 'react'; 

const CountUser = ({countProp}) => { 
    
    return(
        <>
        <p> I get the value of state count from my parent as a prop...</p>
        <p> The value is: {countProp}</p>
        </>

    )

}

export default CountUser; 