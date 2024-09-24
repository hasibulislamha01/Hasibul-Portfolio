
const ShowBlog = ({data}) => {
    return (
        <div className="whitespace-pre-wrap">
            {
                data?.blog
            }
        </div>
    );
};

export default ShowBlog;