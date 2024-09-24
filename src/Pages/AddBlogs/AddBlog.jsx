import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import BlogTypeDropDown from "./BlogTypeDropDown";
import Swal from "sweetalert2";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";

const AddBlog = () => {

    const axiosSecure = useAxiosSecure()
    const [blogType, setBlogType] = useState("Theory")
    // console.log(blogType)

    const { register, control, handleSubmit, formState: { errors }, } = useForm()


    // Use useFieldArray for handling dynamic fields
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'fields',
    });

    const handleBlogType = (type) => {
        setBlogType(type)
    }


    const handleSubmittedData = (data) => {
        const blogInfo = { ...data, blogType }
        console.log(blogInfo)

        axiosSecure.post(`/blogs`, blogInfo)
            .then(res => {
                console.log(res?.data)
                if (res?.data?.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "You created the Blog!",
                        icon: "success"
                    });
                } else {
                    Swal.fire({
                        title: "Failed",
                        text: "An error occured!",
                        icon: "error"
                    });
                }
            }).catch(error => {
                console.error(error?.message)
            })
    }

    return (
        <>
            <div className="py-20 text-center font-medium">
                <h1 className="text-3xl">Create a Blog</h1>
                <p>Life is short</p>
            </div>

            <form className="py-12 container mx-auto min-h-screen" onSubmit={handleSubmit(handleSubmittedData)}>

                <div className=" flex justify-evenly gap-6">
                    <div className="space-y-6">
                        {/* blog title */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-medium">Blog Title</span>
                            </div>
                            <input
                                {...register('title', { required: true })}
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full"
                            />
                            {errors.title && <p className="text-red-400 font-medium">title is required.</p>}
                        </label>

                        {/* cover image */}
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text font-medium">A relevent cover image</span>
                            </div>
                            <input
                                {...register('image', { required: true })}
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                            />
                            {errors.image && <p className="text-red-400 font-medium">Cover image is required.</p>}
                        </label>

                        <BlogTypeDropDown
                            handleBlogType={handleBlogType}
                        ></BlogTypeDropDown>
                    </div>

                    {/* blog */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Blog</span>
                        </div>
                        <textarea
                            {...register('blog', { required: true })}
                            className="textarea textarea-bordered h-full"
                            placeholder="Write your blog here"
                        >
                        </textarea>
                        {errors.blog && <p className="text-red-400 font-medium">Blog is required.</p>}
                    </label>
                </div>


                {/* Render dynamically added fields */}
                {fields.map((item, index) => (
                    <div key={item.id} className="mt-4 flex items-center gap-4">
                        {/* Description Input Field */}
                        <textarea
                            type="text"
                            placeholder="Description"
                            {...register(`fields.${index}.description`, { required: false })}
                            className="border p-2 rounded w-full"
                        />

                        {/* Image Input Field */}
                        <input
                            type="text"
                            {...register(`fields.${index}.image`, { required: false })}
                            className="border p-2 rounded"
                        />

                        {/* Remove Button */}
                        <button
                            type="button"
                            onClick={() => remove(index)}
                            className="text-red-500"
                        >
                            Remove
                        </button>
                    </div>
                ))}

                {/* Button to add new fields */}
                <button
                    type="button"
                    onClick={() =>
                        append({ description: '', image: '' }) // Add new set of fields
                    }
                    className="bg-blue-500 text-white px-4 py-2 rounded my-4"
                >
                    Add Field
                </button>

            


                <div className="flex justify-center mt-12">

                    <button type="submit" className="themeButton w-[200px] py-3 bg-[#2f4f4f] text-white">Create</button>

                </div>
            </form>

        
        </>
    );
};

export default AddBlog;