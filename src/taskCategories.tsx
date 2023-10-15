import React from 'react';
import { TaskList } from './TaskList';
export const categoryNames = ['category1', 'category2'] 
interface categoryProps {
    tasks: Task[];
    toggleTodo: ToggleTodo;
  }
 export function getCategoryList (categoryName: string, taskList: Task[]): Task[] {
  return taskList.filter((task) => task.category === categoryName
  )}
  export const CategoryDiv: React.FC<categoryProps> = ({ tasks, toggleTodo}) => {
    return (
        <div>
        {categoryNames.map((eachCategory) =>
      <div id = {eachCategory}>
    {`only ${eachCategory}`}
    <TaskList tasks={getCategoryList(eachCategory,tasks)} toggleTodo={toggleTodo} />
        
      </div>
        )}
        </div>
    );
  };