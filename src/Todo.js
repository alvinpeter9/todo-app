import React from 'react';
import { FaDotCircle } from 'react-icons/fa';

function Todo({ todo, index, markTodo, removeTodo }) {
    return (
        <div className='card'>
        <div className='card-info'>
        <div className='date'>
        Date: {todo.date}</div> <FaDotCircle style={{color:todo.isComplete? 'green' : 'yellow'}} />
        </div>
        
        <hr />
            
        <div className='card-content'>
                {todo.item}
        </div>
        <div className='footer'>
            <button className='btn success' onClick={() => markTodo(index)}>Completed</button>
            <button className='btn delete' onClick={() => removeTodo(index)}>Delete</button>
        </div>
        </div>
    )
}

export default Todo;

