interface Task {
    text: string;
    complete: boolean;
    value?: number; 
    category?: null | string;
  }
  type ToggleTodo = (selectedTodo: Task) => void;
  type AddTask = (text: string, category?:null | string) => void;