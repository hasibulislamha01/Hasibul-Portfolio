import { useEffect, useState } from "react";
import empty from '../../assets/empty.jpg'
import useAxiosPublic from "../../CustomHooks/useAxiosPublic";
import BlogCard from "./BlogCard";

const Blogs = () => {

    const [blogs, setBlogs] = useState([])
    const axiosPublic = useAxiosPublic()

    useEffect(() => {
        axiosPublic.get('/blogs')
            .then(res => setBlogs(res?.data))
            .catch(error => console.error(`Error fetching blogs data`, error?.message))
    }, [axiosPublic])

    console.log(blogs);

    return (
        <div className="py-20 flex flex-col items-center justify-center min-h-screen">

            {
                blogs?.length === 0 ?
                    <div>
                        <img
                            src={empty}
                            alt="blog is empty"
                            className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]"
                        />
                        <h1 className="text-red-400 text-center font-semibold text-2xl">No Blogs posted yet </h1>
                    </div>
                    :
                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-center justify-items-stretch">
                        {
                            blogs?.map(blog =>
                                <BlogCard key={blog?._id} blog={blog} />
                            )
                        }
                    </div>
            }




        </div>
    );
};

export default Blogs;