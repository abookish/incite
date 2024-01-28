/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { categoryInfo } from '../taskBuilding/taskCategories';
interface Props {
    addTask: AddTask;
  }

export const AddTaskForm: React.FC<Props> = ({ addTask }) => {
  const categoryDefault = categoryInfo[0].codename
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categoryDefault);
  const promptText = "Decide what you are going to do" 
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
            <option value={category.codename}>
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
        if (text){
       addTask(text, category);
       setText('');
        } 
       }}
      >Then do it </button>
      
    </form>
  );
};