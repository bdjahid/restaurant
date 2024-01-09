import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
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
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data)
            if (menuRes.data.insertedId) {
                // show success popup
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data)
    }
    return (
        <div>
            <SectionTitle heading="add an item" subHeading="what is news"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="from-control w-full my-2">
                    <label className="form-control w-full max-w-xs">
                        <span className="label-text">Recipe Name*</span>
                    </label>
                    <input {...register("name", { required: true })}
                        type="text" placeholder="Recipe Name" className="input input-bordered w-full" />
                </div>

                <div className="flex gap-6">
                    {/* category */}
                    <div className="from-control w-full my-6">
                        <label className="form-control w-full max-w-xs">
                            <span className="label-text">Category</span>
                        </label>
                        <select defaultValue="default"  {...register("category")}
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
                        <input {...register("price", { required: true })}
                            type="text" placeholder="Price" className="input input-bordered w-full" />
                    </div>
                </div>
                {/* <select defaultValue="default" {...register("category", { required: true })}
                    className="select select-bordered w-full">
                    <option value="default" disabled>Select a category</option>
                    <option value="salad">Salad</option>
                    <option value="soup">Soup</option>
                    <option value="drinks">Drinks</option>
                    <option value="dessert">dessert</option>
                </select> */}
                {/*price details*/}
                <div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        <textarea {...register("recipeDetail", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                    </label>
                </div>
                <div className="form-control">
                    <input {...register("image", { required: true })} type="file" className="file-input w-full my-4" />
                </div>
                <button type="submit" className="btn btn-outline">Add Item</button>
            </form>
        </div>
    );
};

export default AddItems;