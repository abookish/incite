import React, { useState } from 'react';
import './App.css';
import Title from './beautifulTitle';
import { AddTaskForm } from './Forms/addTaskForm';
import {CategoryDiv } from './taskBuilding/taskCategories';
import { ContainerBox } from './taskBuilding/ContainerBox';
import { SectionHeader } from './beautifulTitle';

const startingList: Task[] = [];

function App() { 
  
  const [tasks, setTodos] = useState(startingList);
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
  const addTask: AddTask = (text: string, category?: string | null) => {
    const newTask = { text, complete: false, category};
    setTodos([...tasks, newTask]);
  };
  return  <> 
   <Title title="let's motivate"/>
   <AddTaskForm addTask={addTask}/>
   <ContainerBox>
   <SectionHeader headerName='submerge in the task'/>
      <CategoryDiv tasks={tasks} toggleTodo={toggleTodo} />
    </ContainerBox>
  </>
}

export default App;
