import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Load tasks from local storage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Function to save tasks to local storage
  const saveTasks = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const addTask = () => {
    if (inputValue === "") {
      alert("You have to write something!");
    } else {
      const newTasks = [...tasks, { text: inputValue, checked: false }];
      saveTasks(newTasks);
      setInputValue("");
    }
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, checked: !task.checked };
      }
      return task;
    });
    saveTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    saveTasks(newTasks);
  };

  return (
    <div className="container">
      <div className="todo-app">
        <h2>To-Do List</h2>
        <div className="addtask">
          <input
            type="text"
            id="input-box"
            placeholder="Add your text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>
        <ul id="List">
          {tasks.map((task, index) => (
            <li key={index} className={task.checked ? "checked" : ""} onClick={() => toggleTask(index)}>
              {task.text}
              <span onClick={(e) => { e.stopPropagation(); removeTask(index); }}>&#x00D7;</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
