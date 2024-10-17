import { useContext, useState } from "react"
import userContext from "../../userContext/userContext"


const LoginPage=()=>{
    const [user,setMyUser]=useState("")
    const  {setUser} =useContext(userContext)
    const handleClick=(e)=>{
        e.preventDefault()
        setUser(user)
    }
    return(
        <div>
            <input type="text" onChange={(e)=>setMyUser(e.target.value)}  placeholder="Enter userName" />
            <input type="text" placeholder=" Password" />
            <button onClick={handleClick} >Submit</button>
        </div>
    )
}
export default LoginPage