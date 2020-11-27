import React from 'react';

const Child = ({brand, model, colour, year}) => {
    return(

        <p>
            {brand}, {model}, {colour}, {year}
        </p>
    );
}
export default Child; 