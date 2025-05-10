import React from 'react'
import { useState } from 'react';

const initialTasks = ["Andare in palestra", "Pulire casa", "Cena fuori"];

const Main = () => {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState(initialTasks);

    const addTask = (e) => {
        e.preventDefault();
        console.log(`il task inserito è ${newTask}`);
        const task = newTask.trim()
        setTasks([...tasks, task]);
        setNewTask("");
    }

    const removeTask = (e, index) => {
        e.preventDefault();
        tasks.splice(index, 1);
        setTasks(tasks);
    }

    return (
        <>
            <main className='container'>
                <h1>Tasks</h1>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            {task}
                            <button onClick={removeTask} key={index} className='btn'>Rimuovi</button>
                        </li>
                    ))}
                </ul>
                <div>
                    <form onSubmit={addTask}>
                        <input value={newTask} onChange={(e) => {setNewTask(e.target.value)}} type="text" placeholder='Nuova task' />
                        <button>Aggiungi Task</button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Main