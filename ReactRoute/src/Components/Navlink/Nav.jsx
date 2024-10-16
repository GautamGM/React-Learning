import { NavLink } from "react-router-dom";
const Navbar=()=>{
    return(
        <div>
            <ul style={{display:"flex",margin:"5px",}}>
            <li style={{margin:"5px",padding:"5px",listStyle:"none"}}><NavLink to="/" >Home</NavLink></li>
            <li style={{margin:"5px",padding:"5px",listStyle:"none"}}><NavLink to="/contact" >contact</NavLink></li>
            <li style={{margin:"5px",padding:"5px",listStyle:"none"}}><NavLink to="/about" >About</NavLink></li>
            {/* <li style={{margin:"5px",padding:"5px",listStyle:"none"}}><NavLink to="/" >git</NavLink></li> */}
            
            </ul>
        </div>
    )
}
export default Navbar