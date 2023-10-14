import React, { useState, FC } from 'react';


interface Props {
    addTask: AddTask;
  }
  interface noProps {
  }
const TaskTextBox: FC<noProps> = ({}) => { //todo new file for these
  const [text, setText] = useState('');

  return (
    <input type="text" 
        id ='taskTextBox'
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}/>
  );
};
const TaskCategorySelector: FC<noProps> = ({}) => { //todo actual choices
  const [category, setCategory] = useState('');

  return (
    <select 
      id='taskCategorySelector'
      value = {category}
      onChange={(event) => {
        setCategory(event.target.value);
      }}
  ></select>
  );
};
const FormSubmitButton: FC<Props> = ({addTask}) => {
  const [category, setCategory] = useState('');
  const [text, setText] = useState('');

  return (
    <button type="submit" 
      id='taskFormSubmit'
      onClick={(event) => {
        event.preventDefault();
        addTask(text); //todo add category to addTask
        setText('');
       }}
      >Then do it </button>
  );
};


export default TaskTextBox; 

export const AddTaskForm: React.FC<Props> = ({ addTask }) => {
 
  return (
    <form>
     <TaskTextBox/>
     <TaskCategorySelector/>
     <FormSubmitButton addTask={addTask}/>
      
    </form>
  );
};