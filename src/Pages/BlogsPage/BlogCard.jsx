import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const trimmedDescription = blog?.blog?.split(' ')?.slice(0, 20)?.join(' ')
    return (
        <div className="bg-neutral space-y-6 text-pretty text-left px-4 py-6 rounded-lg flex flex-col justify-between h-full shadow-lg shadow-primary hover:shadow-xl hover:shadow-primary hover:cursor-pointer transition-all duration-300">
            
            <img src={blog?.image} alt="blog image" className="object-cover w-full h-[200px] rounded-[5px]" />
            <div className="space-y-2 py-2">

                <Link to={`/blog-details/${blog?._id}`}>
                    <h1 className="text-xl md:text-2xl font-semibold text-accent hover:underline">{blog?.title}</h1>
                </Link>

                <p className="whitespace-pre-wrap text-secondary">
                    {trimmedDescription}...
                </p>
            </div>
        </div>
    );
};

BlogCard.propTypes = {
    blog: PropTypes.object
}
export default BlogCard;