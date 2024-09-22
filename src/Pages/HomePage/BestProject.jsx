import { Link } from 'react-router-dom';
import projects from '../../assets/bestProject.json'
import { PiRocketLaunchThin } from 'react-icons/pi';

const BestProject = () => {
    const project = projects[0]
    return (
        <div className='min-h-screen bg-background flex flex-col justify-center'>
            <h1 className='mt-12 text-center text-accent/80 font-bold text-3xl'>My Projects</h1>
            <div className='my-auto container mx-auto flex flex-col md:flex-row items-center justify-between'>

                {/* details container */}
                <div className='h-full md:w-2/3 flex flex-col items-center md:items-start gap-4'>

                    {/* outline text */}
                    <h1 className='text-3xl md:text-7xl text-center md:text-left leading-none font-extrabold text-transparent text-outline'>
                        {project.projectName}
                    </h1>

                    {/* project type */}
                    <h3 className='text-xl md:text-2xl text-center md:text-left font-bold text-white'>{project.type}</h3>
                    {/* description */}
                    <p className='text-secondary text-sm md:text-lg text-center md:text-left font-semibold w-3/4'>
                        {project?.about}
                    </p>

                    <div className='text-accent font-semibold flex justify-center md:justify-start text-center md:text-left flex-wrap gap-3'>
                        {project.skills?.map((skill, index) =>
                            <p key={index}>{skill}</p>
                        )}
                    </div>

                    {/* btns */}
                    <Link to={project?.liveLink}>
                        <button className='btn btn-circle bg-accent border-transparent hover:bg-primary hover:text-accent hover:border-transparent hover:rotate-45 transition-all duration-300 ease-in-out'><PiRocketLaunchThin size={30} className='font-bold' /></button>
                    </Link>
                </div>

                {/* image container */}
                <div className='w-1/3'>
                    <img src={project?.image} alt="project image" />
                </div>
            </div>
        </div>
    );
};

export default BestProject;