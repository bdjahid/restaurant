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
import AddItems from "../pages/DashBoard/AddItems/AddItems";
import AminRoute from "./AminRoute";
import ManageAllItems from "../pages/DashBoard/ManageAllItems/ManageAllItems";
import UpdateItem from "../pages/DashBoard/UpdateItem/UpdateItem";
import Payment from "../pages/DashBoard/Payment/Payment";
import PaymentHistory from "../Layout/Dashboard/PaymentHistory/PaymentHistory";




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
            // all user
            {
                path: "cart",
                element: <Cart></Cart>
            },
            {
                path: "payment",
                element: <Payment></Payment>
            },
            {
                path: "paymentHistory",
                element: <PaymentHistory></PaymentHistory>
            },
            // users only admin
            {
                path: "addItems",
                element: <AminRoute><AddItems></AddItems></AminRoute>
            },
            {
                path: "updateItem/:id",
                element: <UpdateItem></UpdateItem>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path: "manageAllItems",
                element: <ManageAllItems></ManageAllItems>
            },
            {
                path: "users",
                element: <AllUsers></AllUsers>

            }
        ]
    }
]);

export default router;