import React, {useState} from 'react';

const ToDoList = () => {

    const [text, setText] = useState('');
    const [task, setTask] = useState([])

    const handleText = (event) => {
        setText(event.target.value)
    }
    // const searchProduct = () =>{
    //     setSearch(text)
    // }
    // onKeyUp={(event)=>{if(event.keyCode === 13){{setTask} }}} 

    const addTask = () =>{
       // const newTask = {search}
        setTask([...task, text])
        setText('')
    }
    return (
        <div className="col-12">
            <div className="mb-3">
                <label htmlFor='textInput' className="form-label">Buscador</label>
                <input type="text" 
                 value={text}
                className="form-control text-center" 
                id="textInput" 
                placeholder="What needs to be done?" onChange={handleText}
                onKeyUp={e =>e.keyCode == 13 && addTask()}
                 />
                <button className='btn btn-outline-danger' onClick={addTask}>Buscar</button>
            </div>
           {task.map((item,index) =><li className="list-group-item" key={index}>{item}
           <button onClick={()=>
            {let aux = task
                aux.splice(index,1);
            setTask(aux)
            setText("hola")
            console.log(task)}}>x
            </button></li>)}
        </div>
     )
};


export default ToDoList;
