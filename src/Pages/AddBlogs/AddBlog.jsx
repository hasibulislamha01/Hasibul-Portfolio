import { useState } from "react";
import { useForm } from "react-hook-form";
import BlogTypeDropDown from "./BlogTypeDropDown";
import axios from "axios";
import Swal from "sweetalert2";

const AddBlog = () => {

    const serverLink = import.meta.env.VITE_SERVER_LINK
    const [blogType, setBlogType] = useState("Theory")
    // console.log(blogType)

    const { register, handleSubmit, formState: { errors }, } = useForm()


    const handleBlogType = (type) => {
        console.log('selected type is ', type)
        setBlogType(type)
    }


    const handleSubmittedData = (data) => {
        const blogInfo = { ...data, blogType }
        console.log(blogInfo)

        axios.post(`${serverLink}/blogs`, blogInfo)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
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
                console.error(error.message)
            })
    }

    return (
        <>
            <div className="pt-12 text-center font-medium">
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

                        {/* image */}
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



                <div className="flex justify-center mt-12">

                    <button type="submit" className="themeButton w-[200px] py-3 bg-[#2f4f4f] text-white">Create</button>

                </div>
            </form>
        </>
    );
};

export default AddBlog;