import React, {useState} from 'react';

const NewTodoForm = () => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div>
            <input className='' type='input' placeholder='type your todo list here' value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} />
            <button>Create</button>
        </div>
    )
};

export default NewTodoForm;