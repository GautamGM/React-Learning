import { useContext } from "react"
import userContext from "../userContext/userContext"
const ProfilePage=()=>{
    const {user}=useContext(userContext)
    console.log(user)
   return(
    <div>
        {user?<div><h1 className="text-[500px]">Welocome {user}</h1></div>:"please Login"}
    </div>
   )
}
export default ProfilePage