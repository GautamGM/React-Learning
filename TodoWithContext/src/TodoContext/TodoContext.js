import { useContext, createContext } from "react";

const TodoContext = createContext({
  todos: [],//===>Array of todo== here we add todo 
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
  toggelTodo: () => {},
});

export const TodoProvider = TodoContext.Provider;

export default useTodo = () => {
  return useContext(TodoContext); // ==>helpFull
};
