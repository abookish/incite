import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './beautifulTitle';
import { TaskList } from './TaskList';
import { AddTaskForm } from './addTaskForm';

//todo get rid of
const startingList: Task[] = [];

function App() { 
  
  const [tasks, setTodos] = useState(startingList);
//toggle function todo abstract
  const toggleTodo = (selectedTodo: Task) => {
    const newTasks = tasks.map((task: Task) => {
      if (task === selectedTodo) {
        return {
          ...task,
          complete: !task.complete,
        };
      }
      return task;
    });
    setTodos(newTasks);
  };
  
  const addTask: AddTask = (text: string) => {
    const newTask = { text, complete: false, category: null};
    setTodos([...tasks, newTask]);
  };
  return  <> 
   <Title title="let's motivate" subtitle = 'submerge  in the task'/>
    <TaskList tasks={tasks} toggleTodo={toggleTodo} />
    <AddTaskForm addTask={addTask}/>
  </>
}

export default App;
