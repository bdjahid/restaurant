
import { NavLink, Outlet } from 'react-router-dom';
import { CiBookmark, CiCalendar, CiHome, CiMemoPad, CiReceipt, CiShoppingCart } from "react-icons/ci";

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    <li>
                        <NavLink to="/dashboard/cart">
                            <CiShoppingCart />My Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/userHome">
                            <CiHome />User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation">
                            <CiCalendar />Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                            <CiReceipt />Review</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/booking">
                            <CiBookmark />Bookings</NavLink>
                    </li>
                    <div className='divider'></div>
                    <li>
                        <NavLink to="/">
                            <CiHome />Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <CiMemoPad />Menu</NavLink>
                    </li>

                </ul>
            </div>
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;