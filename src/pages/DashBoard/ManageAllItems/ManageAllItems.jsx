import { CiEdit, CiTrash } from "react-icons/ci";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";


const ManageAllItems = () => {
    const [menu] = useMenu();
    const handleDelete = () => {

    }

    const handleUpdate = () => {

    }
    return (
        <div>
            <SectionTitle heading="Manage All Items" subHeading="Hurry Up"></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>${item.price}</td>
                                    <td>
                                        <button
                                            onClick={() => handleUpdate(menu)}
                                            className="btn btn-ghost btn-xs text-lg"><CiEdit className='text-red-900'></CiEdit></button>
                                    </td>
                                    <th>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="btn btn-ghost btn-xs text-lg"><CiTrash className='text-red-900'></CiTrash></button>
                                    </th>
                                </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageAllItems;