import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {

    const blog = useLoaderData()
    console.log(blog);

    return (
        <div className="bg-background py-20 min-h-screen flex flex-col items-center justify-center gap-6">
            <img src={blog?.image} alt="blog image" className="rounded-lg"/>
            <div className="text-pretty w-[95%] md:w-[90%] lg:w-[80%] mx-auto space-y-4">
                <h1 className="text-center text-accent text-xl md:text-2xl font-bold">{blog?.title}</h1>
                <p className="text-secondary whitespace-pre-wrap">
                    {blog?.blog}
                </p>
            </div>
        </div>
    );
};

export default BlogDetails;