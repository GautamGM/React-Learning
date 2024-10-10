import { useEffect, useState } from "react"
import useCurrencyConverter from "./Hooks/useCurrencyConverter"

function App() {
  const [options,setOpt]=useState([])
 const data=useCurrencyConverter("usd")
 const opt=Object.keys(data)
 
  return (
    <>hello</>
  )
}

export default App
