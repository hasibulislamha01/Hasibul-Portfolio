
const BlogCard = ({ blog }) => {
    const trimmedDescription = blog?.blog?.split(' ')?.slice(0, 20)?.join(' ')
    return (
        <div className="bg-slate-200 space-y-6 text-pretty text-left px-4 py-6 rounded-lg ">
            <img src={blog?.image} alt="blog image" className="object-cover w-full h-[200px]" />
            <div className="space-y-2">
                <h1 className="text-xl md:text-2xl font-semibold">{blog?.title}</h1>
                <p className="whitespace-pre-wrap">
                    {trimmedDescription}...
                    {/* {blog?.blog} */}
                </p>
            </div>
            <button className="btn bg-primary text-white">See Blog</button>
        </div>
    );
};

export default BlogCard;