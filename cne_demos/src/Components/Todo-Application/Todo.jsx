import React from 'react'; 
import RBButton from './RBButton';

const Todo = () => {

    return(
        <>
        <div className="todo-list">
            <input type="checkbox"/>
            <p>Teach React to CNE cohort</p>
            <input type="checkbox"/>
            <p>Take Milo to the vet</p>
            <input type="checkbox"/>
            <p>Wash Blue</p>
            <input type="checkbox"/>
            <p>Pick up groceries</p>
        </div>
        <div>
            <RBButton/>
            </div>
            </>
    );
}

export default Todo; 