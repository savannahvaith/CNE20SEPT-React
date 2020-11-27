import React from 'react'; 
import RBButton from './RBButton';
import TodoList from './TodoList';

const Todo = () => {

    return(
        <>
        <div className="todo-list">
           <TodoList description="Teach React to CNE Cohort"/>
           <TodoList description="Walk Milo"/>
           <TodoList description="Feed the dog"/>
           <TodoList description="Cry"/>
        </div>
        <div>
            <RBButton/>
        </div>
        </>
    );
}

export default Todo; 