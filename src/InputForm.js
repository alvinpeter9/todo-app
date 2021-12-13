import React, { useState } from 'react';
import { IoMdText } from 'react-icons/io';


function InputForm( {addTodo}) {
    const [value, setValue] = useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();
    if (!value) return;
        addTodo(value);
        setValue("");
    }


    return (
        <form className='form' onSubmit={handleSubmit}> 
            <div className='input'><IoMdText style={{margin:'10px',width:'25px',height:'25px'}} />
                <input type='text' value={value} onChange={e => setValue(e.target.value)} 
                placeholder='add an item to your list' />
            </div>
            <button className='btn' type="submit">
                Submit
            </button>
        </form>
    )
}

export default InputForm;
