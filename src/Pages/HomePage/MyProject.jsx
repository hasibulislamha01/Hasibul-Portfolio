import { Button } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";


const MyProject = () => {

    const [projects, setProjects] = useState([])

    useEffect(()=> {
        axios('https://hasibul-porfolio-server.vercel.app/projects')
        .then(res=> setProjects(res?.data))
        .catch(error => console.error(error.message))
    }, [])

    console.log(projects)

    return (
        <div className="lg:h-screen">
            <h1 className="text-3xl mb-10">My Projects</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    projects?.map(project => 
                        <ProjectCard 
                            key={project?._id}
                            project={project}
                        ></ProjectCard>
                    )
                }
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