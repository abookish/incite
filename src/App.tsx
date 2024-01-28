import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Title, {Warning} from './beautifulTitle';
import { AddTaskForm } from './Forms/addTaskForm';
import {CategoryDiv } from './taskBuilding/taskCategories';
import { ContainerBox } from './taskBuilding/ContainerBox';
/*app todos:
-handle empties
-hint text for text box
-prettier colors
-round boxes
-linter
-star toggle
-star section
-cat names
-app icon
-make it pretty
  -smaller sections, hide sections
*/
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
  const addTask: AddTask = (text: string, category?: string | null) => {
    const newTask = { text, complete: false, category};
    setTodos([...tasks, newTask]);
  };
  return  <> 
   <Title title="let's motivate" subtitle = 'submerge  in the task'/>
   <ContainerBox>
      <CategoryDiv tasks={tasks} toggleTodo={toggleTodo} />
    </ContainerBox>

    <AddTaskForm addTask={addTask}/>
  </>
}

export default App;
