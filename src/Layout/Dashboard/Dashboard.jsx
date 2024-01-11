
import { NavLink, Outlet } from 'react-router-dom';
import { CiBookmark, CiCalendar, CiHome, CiMemoPad, CiReceipt, CiShoppingCart, CiUser, CiVoicemail } from "react-icons/ci";
import useCart from '../../hooks/useCart';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    console.log('admin', isAdmin)
    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <CiHome />Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                    <CiBookmark />Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageAllItems">
                                    <CiBookmark />Manage All Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageBookings">
                                    <CiBookmark />Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <CiUser />All Users</NavLink>
                            </li>

                        </> :
                            <>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <CiShoppingCart />My Cart {cart.length}</NavLink>
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
                                <li>
                                    <NavLink to="/dashboard/paymentHistory">
                                        <CiBookmark />Payment real History</NavLink>
                                </li>

                            </>
                    }
                    {/*  */}
                    <div className='divider'></div>
                    <li>
                        <NavLink to="/">
                            <CiHome />Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <CiMemoPad />Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact">
                            <CiVoicemail />Contact</NavLink>
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