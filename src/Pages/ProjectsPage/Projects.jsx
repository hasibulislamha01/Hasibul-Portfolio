import axios from "axios";
import { useEffect, useState } from "react";
import MyProjectsCard from "./MyProjectsCard";
import WideCardSkeleton from "../../Components/Skeletons/WideCardSkeleton";

const Projects = () => {

    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios('https://hasibul-porfolio-server.vercel.app/projects')
            .then(res => {
                setProjects(res?.data)
                setLoading(false)
            })
            .catch(error => console.error(error.message))
    }, [])


    return (
        <div className="min-h-screen bg-background pt-20">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center text-accent">My Projects</h1>

                <div className="grid grid-cols-1">
                    {
                        loading ?
                            <div className="mt-12 flex flex-col gap-12">
                                <WideCardSkeleton />
                                <WideCardSkeleton />
                                <WideCardSkeleton />
                            </div>
                            :
                            projects?.map(project =>
                                <MyProjectsCard
                                    key={project?._id}
                                    project={project}
                                ></MyProjectsCard>
                            )
                    }
                </div>

            </div>
        </div>
    );
};

export default Projects;