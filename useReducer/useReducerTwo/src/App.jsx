import { useState, useReducer } from "react";

const INCREMENT = "increment";
const DECREMENT = "decrement";
const ADD_NUMBER = "addNumber";
const add_vlue = "add_value";
const VALUE_TO_SUB="sub_Value"
const SUBNUMBER="sub_number"

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case add_vlue:
      return { ...state, valueToAdd: action.payload };
    case ADD_NUMBER:
      return { ...state, count: state.count + state.valueToAdd };
    case (VALUE_TO_SUB):
      return ({
        ...state,valueToSub:action.payload
      })
    case(SUBNUMBER):
    return({
      ...state,count:state.count-state.valueToSub
    })
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    valueToAdd: 0,
    valueToSub:0
  });
  const handleIncrement = () => {
    // increment function
    dispatch({ type: INCREMENT });
  };

  const handleDecrement = () => {
    // decrementFunction
    dispatch({ type: DECREMENT });
  };

  // handlehagevalue

  const handleChangeValue = (e) => {
   const value=parseInt(e.target.value)||0
    dispatch({ type: add_vlue, payload: value });
  
  };

  // function for add the value
  const handleSumOfNumber = (e) => {
    e.preventDefault();
    dispatch({type:ADD_NUMBER });
    dispatch({type:add_vlue,payload:""})
  };
  // subract number
  const handleSubtract=(e)=>{
    const subValue=parseInt(e.target.value)||0
    dispatch({type:VALUE_TO_SUB,payload:subValue})
  }
  const handleSubOfNumber=(e)=>{
    e.preventDefault()
    dispatch({type:SUBNUMBER})
    dispatch({type:VALUE_TO_SUB,payload:""})
    console.log("sub number inws clck")
  }
  console.log(state);
  return (
    <div>
      <h1 className="text-center text-[48px] font-[700] ">
        Counter using useReducer
      </h1>
      <div className="flex justify-center flex-col items-center">
        <div>{state.count}</div>
        <div className="button">
          <button
            onClick={handleIncrement}
            className="border p-3 m-3 rounded-[15px] "
          >
            Increment
          </button>
          <button
            onClick={handleDecrement}
            className="border p-3 m-3 rounded-[15px] "
          >
            Decrement
          </button>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-center text-[24px] font-[700] ">
            Add a lot !
          </label>
          <input
            type="number"
            value={state.valueToAdd || ""}
            className="border m-2 p-2 rounded-[12px]"
            onChange={handleChangeValue}
          />
          <button
             onClick={handleSumOfNumber}
            className="border p-2 rounded-[14px] bg-blue-700 text-white  "
          >
            Add
          </button>
          {/* Vaue to Subtract */}
          <input type="number" className="border m-2 p-2 rounded-[12px]" value={state.valueToSub||""} onChange={handleSubtract} />
          <button  onClick={handleSubOfNumber}  className="border p-2 rounded-[14px] bg-blue-700 text-white  " >sub</button>
          </div>
      </div>
    </div>
  );
}

export default App;
