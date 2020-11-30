import React,{useState} from 'react'; 
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

const Calculator = () => {

    const [temp, setTemp] = useState(``);
    const [scale, setScale] = useState('c');

    const updateCelsiusTemperature = (temp) => {
        setTemp(temp.target.value);
        setScale("c");
    }

    const updateFahrenheitTemperature = (temp) => {
        setTemp(temp.target.value);
        setScale("f");
    }

    const scaleNames = {
        c: 'celsius',
        f: 'fahrenheit'
    }

    function toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    function toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    function tryConvert(temp, convert) {
        const input = parseFloat(temp);
        if (Number.isNaN(input)) {
            return ``;
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    const celsius = scale === 'f' ? tryConvert(temp, toCelsius) : temp; 
    const fahrenheit = scale === 'c' ? tryConvert(temp, toFahrenheit) : temp; 


    return(
        <>
            <TemperatureInput scale="c" temp={celsius} updateTemperature={updateCelsiusTemperature}/>
            <TemperatureInput scale="f" temp={fahrenheit} updateTemperature={updateFahrenheitTemperature}/>

            <BoilingVerdict celsius={parseFloat(celsius)}/>
        </>
    )

}

export default Calculator; 
