import { useState, useEffect } from 'react';
import InputForm from './InputForm';
import Todo from "./Todo";
import { FaDotCircle } from 'react-icons/fa';

function TodoList() {

    useEffect((e) => {
        const hamburger = document.getElementById('hamburger');
        function Toggle(e) {
            const ul = document.querySelector('nav > ul');
            ul.classList.toggle('menu-slide');
            hamburger.classList.toggle('cross');
        }
        hamburger.addEventListener('click', Toggle(e));
        return hamburger.removeEventListener('click',Toggle(e));
    })



    const [todos, setTodos] = useState([]);

      const addTodo = text => {
        const newTodos = [
            ...todos, 
            { item: text,
        isComplete: false,
        date: dateHandler() }
        ];
        setTodos(newTodos);
      };
    
      const markTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isComplete = true;
        setTodos(newTodos);
      };
    
      const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };


    const dateHandler=()=>{
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() +':'+ today.getMinutes() +':'+ today.getSeconds();
        return date+' '+time;
    }



    return (
        <>
        <div className='header'>
        <nav><div className='nav-logo'> TODO MANAGER <span className='divider'></span> </div>
        <a href="/" className="hamburger" id="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </a>
        <ul>
                <li><a className="active" href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
        <div className='input-section'>
            <InputForm addTodo={addTodo} />
        </div>
        </div>
        
        <div className='underline'>Completed <FaDotCircle style={{color:'green'}} /> ||
         Pending <FaDotCircle style={{color:'yellow'}} /></div>

        <div className='box'>
        {todos.map((todo, index) => (
                <Todo key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
          ))}
            {!todos.length && <h2>No item on your list.</h2> }
        </div>
        </>
    );
}

export default TodoList;
