import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import useAxios from "../../../hooks/useAxios";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const UpdateItem = () => {
    const { name, category, recipe, price, _id } = useLoaderData();
    console.log(_id)
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxios();
    const onSubmit = async (data) => {
        console.log(data)
        //image upload to image and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data)
            if (menuRes.data.modifiedCount > 0) {
                // show success popup
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} update to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data)
    }
    return (
        <div>
            <SectionTitle heading="update an item" subHeading="what is news"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="from-control w-full my-2">
                    <label className="form-control w-full max-w-xs">
                        <span className="label-text">Recipe Name*</span>
                    </label>
                    <input defaultValue={name}  {...register("name", { required: true })}
                        type="text" placeholder="Recipe Name" className="input input-bordered w-full" />
                </div>

                <div className="flex gap-6">
                    {/* category */}
                    <div className="from-control w-full my-6">
                        <label className="form-control w-full max-w-xs">
                            <span className="label-text">Category</span>
                        </label>
                        <select defaultValue={category}  {...register("category")}
                            className="select select-bordered w-full">
                            <option value="default" disabled>Select a category</option>
                            <option value="salad">Salad</option>
                            <option value="soup">Soup</option>
                            <option value="drinks">Drinks</option>
                            <option value="dessert">dessert</option>
                        </select>
                    </div>
                    {/* price */}
                    <div className="from-control w-full my-6">
                        <label className="form-control w-full max-w-xs">
                            <span className="label-text">Price</span>
                        </label>
                        <input defaultValue={price} {...register("price", { required: true })}
                            type="text" placeholder="Price" className="input input-bordered w-full" />
                    </div>
                </div>

                {/*price details*/}
                <div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        <textarea defaultValue={recipe}  {...register("recipe", { required: true })} className="textarea textarea-bordered h-24"></textarea>
                    </label>
                </div>
                <div className="form-control">
                    <input {...register("image", { required: true })} type="file" className="file-input w-full my-4" />
                </div>
                <button type="submit" className="btn btn-outline">Update Item</button>
            </form>
        </div>
    );
};

export default UpdateItem;