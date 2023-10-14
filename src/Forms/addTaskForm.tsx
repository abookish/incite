import React, { useState } from 'react';
interface Props {
    addTask: AddTask;
  }


export const AddTaskForm: React.FC<Props> = ({ addTask }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');

  return (
    <form>
     <input type="text" //todo get smarter then asbtract this
        id ='taskTextBox'
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}/>
     <select 
      id='taskCategorySelector'
      value = {category}
      onChange={(event) => {
        setCategory(event.target.value);
      }}
  ></select>
     <button type="submit" 
      id='taskFormSubmit'
      onClick={(event) => {
        event.preventDefault();
        addTask(text); //todo add category to addTask
        setText('');
       }}
      >Then do it </button>
      
    </form>
  );
};