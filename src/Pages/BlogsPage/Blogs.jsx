import axios from "axios";
import { Link } from "react-router-dom";

const Blogs = () => {


    return (
        <div className="flex flex-col items-center justify-center min-h-screen">

            <Link to='/addBlog'>
                <button className=" w-[250px] h-[50px] themeButton font-medium rounded-sm ">
                    Add a blog
                </button>
            </Link>


        </div>
    );
};

export default Blogs;