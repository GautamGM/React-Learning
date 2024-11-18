import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [addNum, setAddNum] = useState(0);
  const handelChangeNumber = (e) => {
    const value = Number(e.target.value)||0;
    setAddNum(value)
  };
  const handelSubmit=(e)=>{
    e.preventDefault()
    setCount((prev)=>prev+addNum)
    setAddNum(0)
  }
  return (
    <div className=" flex flex-col items-center">
      {count}
      <div>
        <button
          className="border p-2 m-1 rounded-[15px] bg-blue-400"
          onClick={() => setCount(() => count + 1)}
        >
          increment
        </button>
        <button
          className={`border p-2 m-1 rounded-[15px] bg-red-5001 ${
            count === 0 ? `bg-[red]  line-through ` : `bg-green-600`
          }`}
          onClick={() => setCount(() => count - 1)}
          disabled={count === 0}
        >
          {count === 0 ? "disable" : "decrement"}
        </button>
        <button className="p-2 border rounded bg-black text-gray-300 font-[700]" onClick={(()=>setCount(0))}>Reset Count</button>
      </div>

      {/* form */}
      <form action="" onSubmit={handelSubmit} >
        <label htmlFor="" className=" p-2 font-[600] rounded ">
          Add number
        </label>
        <input
        value={addNum||""}
          className="border p-2 rounded-[15px] m-2"
          type="number"
          onChange={handelChangeNumber}
        />
        <button type="submit" className=" p-3  rounded-[12px] bg-slate-600 text-white  border ">
          Add it !
        </button>
      </form>
    </div>
  );
}

export default App;
