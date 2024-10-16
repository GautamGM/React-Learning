import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const NavLinksBar=()=>{
    return(
       <div>
        <nav style={{display:"flex",justifyContent:"center",}} >
            <div style={{marginLeft:"5px"}}><NavLink  to={"/"}>Home</NavLink></div>
           <div style={{marginLeft:"15px"}} ><NavLink to="/product">Product</NavLink></div>
        </nav>
       </div>
    )
}
export default NavLinksBar