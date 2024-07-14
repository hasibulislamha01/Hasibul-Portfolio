import { useState } from "react";
import { useForm } from "react-hook-form";
import BlogTypeDropDown from "./BlogTypeDropDown";
import axios from "axios";

const AddBlog = () => {

    const [blogType, setBlogType] = useState("Theory")
    // console.log(blogType)

    const { register, handleSubmit, formState: { errors }, } = useForm()


    const handleBlogType = (type) => {
        console.log('selected type is ',type)
        setBlogType(type)
    }
    
    const handleSubmittedData = (data) => {
        const blogInfo = {...data, blogType}
        console.log(blogInfo)

        axios.post('/blogs', blogInfo)
        .then(res => {
            console.log(res.data)
        }) .catch(error => {
            console.error(error.message)
        })
    }

    return (
        <form className="py-12 container mx-auto border border-red-300" onSubmit={handleSubmit(handleSubmittedData)}>

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




            <button type="submit" className="my-10 btn bg-[#2f4f4f] text-white">Add Blog</button>

        </form>
    );
};

export default AddBlog;