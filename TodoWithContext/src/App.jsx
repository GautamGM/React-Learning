import { TodoForm, TodoItem } from "./Components";
import ThemeBtn from "./Components/ThemeBtn/ThemeBtn";
import { TodoProvider } from "./TodoContext";
import { useEffect, useState } from "react";
function App() {
  // To do Functionlity===<>
  const [todos, setTodos] = useState([]);
  const[count,setcont]=useState(0)
  const addTodo = (todo) => {
    setTodos((prevTodo) => [{ id: Date.now(), ...todo }, ...prevTodo]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prevTodo) =>
      prevTodo.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };
  const deleteTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };
  const toggleComplete = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    
  };

  useEffect(()=>{
   const todo= JSON.parse(localStorage.getItem("todos"))||[]
   setTodos(todo)
  },[])

  useEffect(()=>{
    if(todos.length>0){
      localStorage.setItem("todos",JSON.stringify(todos))
    }
  },[todos])
// =-------------------------------------------------------------------End of Todo Functionality--------------->
const [themeMode, setThemeMode] = useState("light");

  const lightMode = () => {
    setThemeMode("light");
  };

  const darkMode = () => {
    setThemeMode("dark");
  };

  // giving the depence when it chnage intire code will we rerender
  // Actual change in theme

  useEffect(() => {
    const Mode = document.querySelector("html");
    Mode.classList.remove("light", "dark");
    Mode.classList.add(themeMode);
  }, [themeMode]);

  useEffect(()=>{
    const theme=localStorage.getItem("themeMode")
    setThemeMode(theme)
    console.log(theme)
  },[])

  useEffect(()=>{
    localStorage.setItem("themeMode",themeMode)
  },[themeMode])

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete ,themeMode,darkMode,lightMode}}
    >
      <div className="dark:bg-[#222325] min-h-screen py-8 bg-slate-200">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 dark:text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos 
          </h1>
          <div><ThemeBtn/></div>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div className="w-full" key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
