import React from 'react';
import logo from './logo.svg';
import {TaskListItem} from './Task'
import './App.css';
import Title from './beautifulTitle';

//need task prompt
const tasks: Task[] = [
  {
    text: 'Make nice little sections',
    complete: false,
    value: 4,
    category: 'first'
  },
  {
    text: 'Go through little tutorial',
    complete: true,
    value: 2,
    category: 'second'
  },
];

function App() { //passing in tasks
  return  <> 
   <Title title='TODO' subtitle = 'submerge  in the task'/>
  <TaskListItem task = {tasks[0]}/> 
  <TaskListItem task = {tasks[1]}/> 
  </>;
}

export default App;
