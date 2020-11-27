import React,{useState} from 'react'; 

const TodoList = ({description}) => {
    const [todoCompleted, setTodoCompleted] = useState(false);

    return(
        <>
        <input 
            type="checkbox" 
            checked={todoCompleted}
            onChange={event => setTodoCompleted(event.target.checked)}/>
        { todoCompleted ? 
        <p style={{
            textDecoration:"line-through", 
            color:"red"
        }}>{description}</p> 
        : 
        <p> {description} </p>}
        
        </>
    )
}

export default TodoList;