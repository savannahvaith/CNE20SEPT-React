import React, {useEffect, useState} from 'react'; 
import axios from 'axios';

const EmployeeInfo = () => {
    const [people, setPeople] = useState([]);
    const [trigger, setTrigger] = useState(true);

    useEffect(() => {
        axios("http://dummy.restapiexample.com/api/v1/employees")
        .then( res=> {
            console.log(res.data)
            setPeople(res.data.data)   
        }) // thumbs up
        .catch(err => console.log(err)) // uhho
    },[]);

    return(
        <>
        <p> Hi</p>
        {
            people.map( (tempvariable) => (
                <li key={tempvariable.id}> {tempvariable.employee_name}</li>
            ))
        }
        <input type="checkbox" checked={trigger} onChange={ () => setTrigger(!trigger)}/>
        </>
    )

}

export default EmployeeInfo;

