import React, { useState } from 'react';
import { categoryInfo } from '../taskBuilding/taskCategories';
interface Props {
    addTask: AddTask;
  }

export const AddTaskForm: React.FC<Props> = ({ addTask }) => {
  let categoryDefault = categoryInfo[0].codename
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categoryDefault);
  
  return (
    <form>
     <input type="text" //todo get smarter then improve this
        id ='taskTextBox'
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}/>
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