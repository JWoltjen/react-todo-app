import React, { useState } from 'react'

function TodoForm() {
    const [input, setInput] = useState('')

    const handleSubmit = e => {
        e.preventDefault(); 
        // props.onSubmit({
        //     id: Date.now(),
        //     text: input
        // })
        setInput('')
    }
    const handleChange = e => {
        setInput(e.target.value)
    }

    return (
        <div>
            <form className='todo-form' onSubmit={handleSubmit}>
                <input 
                type='text' 
                placeholder='add a todo' 
                value={input} 
                name="text"
                className='todo-input'
                onChange={handleChange}
                />
                <button className='todo-button'>Add todo</button>
            </form>
        </div>
    )
}

export default TodoForm
