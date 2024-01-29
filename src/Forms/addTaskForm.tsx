import React, { useState } from 'react';
import { categoryInfo } from '../taskBuilding/taskCategories';
interface Props {
    addTask: AddTask;
  }

export const AddTaskForm: React.FC<Props> = ({ addTask }) => {
  const categoryDefault = categoryInfo[0].codename
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categoryDefault);
  const promptText = "What is it you plan to do?" 
  const taskBoxId = 'taskTextBox'
  return (
    <form>
      <select 
      id='taskCategorySelector'
      value = {category}
      onChange={(event) => {
        setCategory(event.target.value)
      }}
  >
     {categoryInfo.map((category) => (
            <option key = {category.codename} value={category.codename}>
              {category.userFacingString}
            </option>
          ))}
  </select>
      <label htmlFor="taskTextBox"></label>
     <input type="text" 
        id ={taskBoxId}
        aria-label={taskBoxId + promptText}
        placeholder = {promptText}
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}/>
        
     <button type="submit" 
      id='taskFormSubmit'
      onClick={(event) => {
        event.preventDefault();
        if (text.trim()){
       addTask(text, category);
        } 
        setText('');
       }}
      >I mean it</button>
      
    </form>
  );
};