import { Link } from 'react-router-dom';
import projects from '../../assets/bestProject.json'
import { PiRocketLaunchThin } from 'react-icons/pi';
import { Tooltip } from 'react-tooltip';
import { LuGithub } from 'react-icons/lu';

const BestProject = () => {
    const project = projects[0]

    return (
        <div className="min-h-screen">
            <h1 className="text-2xl font-bold mb-10 text-center">My Projects</h1>

            <div className='my-auto container mx-auto flex flex-col md:flex-row items-center justify-between'>

                {/* details container */}
                <div className='h-full md:w-3/5 flex flex-col items-center md:items-start gap-4'>

                    {/* outline text */}
                    <h1 className='text-outline-best-project text-3xl md:text-7xl text-center md:text-left leading-none font-extrabold text-transparent text-outline'>
                        {project?.projectName}
                    </h1>

                    {/* project type */}
                    <h3 className='text-xl md:text-2xl text-center md:text-left font-bold text-background'>{project.type}</h3>
                    {/* description */}
                    <p className='text-black text-sm md:text-lg text-center md:text-left font-semibold w-3/4'>
                        {project?.about}
                    </p>

                    <div className='text-primary font-semibold flex justify-center md:justify-start text-center md:text-left flex-wrap gap-3'>
                        {project?.skills?.map((skill, index) =>
                            <p key={index}>{skill}</p>
                        )}
                    </div>

                    {/* btns */}

                    <div className='flex items-center justify-center md:justify-start gap-4 lg:gap-6'>

                        {/* live */}
                        <Link
                            to={project?.liveLink}
                            target='_blank'
                            data-tooltip-id={project?.liveLink}
                            data-tooltip-content='Live Site'
                        >
                            <button className='btn btn-circle bg-primary hover:bg-primary text-secondary border-transparent hover:text-accent hover:border-transparent hover:scale-90 hover:rotate-45 transition-all duration-300 ease-in-out'>
                                <PiRocketLaunchThin size={30} /></button>
                        </Link>
                        <Tooltip id={project?.liveLink} />

                        {/* client */}
                        <Link
                            to={project?.clientSide}
                            target='_blank'
                            data-tooltip-id={project?.clientSide}
                            data-tooltip-content='Client Site'
                        >
                            <button className='btn btn-circle bg-primary text-secondary border-transparent hover:bg-primary hover:text-accent hover:border-transparent hover:scale-90 hover:rotate-45 transition-all duration-300 ease-in-out'>
                                <LuGithub size={30} />
                            </button>
                        </Link>
                        <Tooltip id={project?.clientSide} />

                        {/* server */}
                        <Link
                            to={project?.serverSide}
                            target='_blank'
                            data-tooltip-id={project?.serverSide}
                            data-tooltip-content='Server Site'
                        >
                            <button className='btn btn-circle bg-primary text-secondary border-transparent hover:bg-primary hover:text-accent hover:border-transparent hover:scale-90 hover:rotate-45 transition-all duration-300 ease-in-out'>
                                <LuGithub size={30} />
                            </button>
                        </Link>
                        <Tooltip id={project?.serverSide} />

                    </div>
                </div>

                {/* image container */}
                <div className='w-2/5'>
                    <img src={project?.image} alt="project image" className='rounded-lg' />
                </div>
            </div>

            <div className='flex justify-center'>
                <Link to='/projects' className='my-6 btn bg-accent text-black font-semibold hover:scale-90 mt-6'>
                    Browse More Projects
                </Link>
            </div>
        </div>
    );
};

export default BestProject;