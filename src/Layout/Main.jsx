import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Share/Footer/Footer";
import Navbar from "../pages/Share/Navbar/Navbar";


const Main = () => {
    const location = useLocation();
    // console.log(location)
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;