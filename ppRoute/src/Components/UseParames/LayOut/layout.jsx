import NavLinksBar from "../Links/navbar"
import { Outlet } from "react-router"
const LayOut=()=>{
    return(
        <div>
            <nav><NavLinksBar/></nav>
            <Outlet/>
        </div>
    )
}
export default LayOut