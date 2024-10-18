import { useContext, createContext } from "react";

const TodoContext = createContext({
  todos: [
    {
      id:1,
      todo:"ramu",
      completed:false
    }
  ], //===>Array of todo== here we add todo
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (id, todo) => {},
  toggleComplete: (id) => {},
  // theme context
  themeMode:"light",
    lightMode:()=>{},
    darkMode:()=>{}
});

export const TodoProvider = TodoContext.Provider;

export  const useTod=()=>{
  return useContext(TodoContext); // ==>helpFull
};
