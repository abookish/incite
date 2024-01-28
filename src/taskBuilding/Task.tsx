import React from 'react';
  interface taskProps {
    task: Task;
    toggleTodo: ToggleTodo;
  }
  
export const TaskListItem: React.FC<taskProps> = ({task, toggleTodo}) => { //making it a component, passing Props
  return (<ul>
    <label color = 'red'
        style={{ textDecoration: task.complete ? 'line-through' : undefined }}
      >
        <input type="checkbox" checked={task.complete}  
        onClick={() => {
            toggleTodo(task);
          }}/> 
          {task.text}
       
      </label>
    </ul>
  );
};