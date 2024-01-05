import { createBrowserRouter } from "react-router-dom";
import Main from './../Layout/Main';
import Home from "../pages/Home/Home/Home";
import Menu from './../pages/Menu/Menu/Menu';
import Order from './../pages/Order/Order';
import Login from './../pages/Home/Login/Login';
import SignUp from './../pages/Home/SignUp/SignUp';
import Dashboard from './../Layout/Dashboard/Dashboard';
import Cart from './../pages/DashBoard/Cart/Cart';
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/menu",
                element: <Menu></Menu>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "/order/:category",
                element: <Order></Order>,
            }
        ]
    },
    // second routes
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "cart",
                element: <Cart></Cart>
            },
            // users admin
            {
                path: "users",
                element: <AllUsers></AllUsers>
            }
        ]
    }
]);

export default router;