import React,{useState} from 'react';

const DifferentStates = () => {

    const [answer, setAnswer] = useState("Yes"); // String
    const [num, setNum] = useState(123);
    const [array, setArray] = useState(["name","Sav"]);
    const [edit, setEdit] = useState(false);

    return(

        <>
            <p> Is state important to know? {answer}</p>
            <p>What is the number: {num}</p>
            <p> What is in the aray: {array}</p>
            {
                edit ? <p>True</p> : <p> False</p>
            }

            <button onClick={() => setEdit(true)}>Update Edit</button>
        </>

    )

}

export default DifferentStates; 