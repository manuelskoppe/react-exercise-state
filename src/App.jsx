import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '' && !tasks.includes(task)) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  const removeTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  return (
    <>
      {/* ... Resto de tu código ... */}
      
      {/* Campo de texto y botón para añadir tareas */}
      <input 
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Añade una nueva tarea"
      />
      <button onClick={addTask}>Añadir Tarea</button>

      {/* Lista de tareas */}
      <ul>
        {tasks.map((tarea, index) => (
          <li key={index}>
            {tarea}
            <button onClick={() => removeTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App;
