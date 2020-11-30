import React, { useState } from 'react';
import BoilingVerdict from './BoilingVerdict';

const TemperatureInput = ({scaleNames,temp,updateTemperature}) => {

    return (
        <fieldset>
            <legend>
               Enter temperature in {scaleNames}
            </legend>
            <input value={temp} onChange={updateTemperature}/>

        </fieldset>
    )

}

export default TemperatureInput; 
