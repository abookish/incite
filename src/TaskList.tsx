import React from 'react';
import { TaskListItem } from './Task';

interface Props {
  tasks: Task[];
  toggleTodo: ToggleTodo;
}

export const TaskList: React.FC<Props> = ({ tasks, toggleTodo }) => {
  return (
    <ul>
      
      {tasks.map((task) => (
        <TaskListItem key={task.text} task={task} toggleTodo={toggleTodo} />
      ))}
      
    </ul>
  );
};