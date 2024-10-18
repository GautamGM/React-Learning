import { useState } from "react";
import { useTod } from "../../TodoContext";

function TodoForm() {
    
    const [todo,setTodo]=useState("")

    const {addTodo}=useTod()

    const add=(e)=>{
        e.preventDefault()
        if(!todo) return
        addTodo({todo,complete:false})
        setTodo("")
    }


    

    return (
        <form onSubmit={add}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 dark:bg-green-600 bg-black  text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

