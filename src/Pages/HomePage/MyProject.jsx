import { Button } from "antd";
import { Link } from "react-router-dom";


const MyProject = () => {
    return (
        <div>
            <h1 className="text-3xl">My Projects</h1>
            <div>

            </div>
            <Link to='/addProject'>
                <Button
                    className="bg-[#2f4f4f] text-[#e1e2db] font-semibold my-12"
                >
                    Add a new Project
                </Button>
            </Link>
        </div>
    );
};

export default MyProject;