import Navbar from "../Components/Navlink/Nav"
import FooterBar from "../Components/Footer/footer"
import {Outlet} from "react-router-dom"
const Layout=()=>{
    return(
        <div>
            {/* /Navbar */}
            <Navbar/>
            <Outlet/>
            <FooterBar/>
            
        </div>
    )
}
export default Layout