import React, { useState } from 'react';
interface Props {
    addTask: AddTask;
  }

const categoryNames = ['category1', 'category2']
export const AddTaskForm: React.FC<Props> = ({ addTask }) => {
  let categoryDefault = categoryNames[0]
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
     {categoryNames.map((eachName) => (
            <option value={eachName}>
              {eachName}
            </option>
          ))}
  </select>
     <button type="submit" 
      id='taskFormSubmit'
      onClick={(event) => {
        event.preventDefault();
       addTask(text, category); //todo add category to addTask
        setText('');
        setCategory(categoryDefault)
       }}
      >Then do it </button>
      
    </form>
  );
};