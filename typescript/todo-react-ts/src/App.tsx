import React, { useState } from 'react';
import './app.css'
import { IState } from './interface'
import TodoList from './components/TodoTask'

const App: React.FC = () => {

  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(1)

  const [todo, setTodo] = useState<IState['note'][]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const action = e.target.name
    if (action === 'task') setTask(e.target.value)
    if (action === 'deadline') setDeadline(+e.target.value)
  }

  const addTask = (): void => {
    const newTask = { task, deadline }
    setTodo([...todo, newTask])
  }

  return (
    <div className="App">
      <div className="header">
        <div className="input-container">
          <input className="input" name="task" onChange={(e) => handleChange(e)} type="text" placeholder="Task..." />
          <input className="input" name="deadline" onChange={(e) => handleChange(e)} type="number" placeholder="Deadline (In days)..." />
        </div>
        <button className="add-task-btn" onClick={addTask}>Add task</button>
      </div>
      <div className="todo-list">

        {todo.map((note:IState['note'],key:number) => {return <TodoList note={note}/>})}

      </div>
    </div>
  );

}

export default App;
