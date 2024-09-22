import { Link } from 'react-router-dom';
import { PiRocketLaunchThin } from 'react-icons/pi';
import { Tooltip } from 'react-tooltip';
import { LuGithub } from 'react-icons/lu';
import PropTypes from 'prop-types'

const MyProjectsCard = ({project}) => {
    return (
        <div className='min-h-screen flex flex-col justify-center'>
            <div className='my-auto container mx-auto flex flex-col md:flex-row items-center justify-between'>

                {/* details container */}
                <div className='h-full md:w-3/5 flex flex-col items-center md:items-start gap-4'>

                    {/* outline text */}
                    <h1 className='text-3xl md:text-7xl text-center md:text-left leading-none font-extrabold text-transparent text-outline'>
                        {project?.projectName}
                    </h1>

                    {/* project type */}
                    <h3 className='text-xl md:text-2xl text-center md:text-left font-bold text-white'>{project.type}</h3>
                    {/* description */}
                    <p className='text-secondary text-sm md:text-lg text-center md:text-left font-semibold w-3/4'>
                        {project?.about}
                    </p>

                    <div className='text-accent font-semibold flex justify-center md:justify-start text-center md:text-left flex-wrap gap-3'>
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
                            <button className='btn btn-circle bg-accent border-transparent hover:bg-primary hover:text-accent hover:border-transparent hover:scale-90 hover:rotate-45 transition-all duration-300 ease-in-out'>
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
                            <button className='btn btn-circle bg-accent border-transparent hover:bg-primary hover:text-accent hover:border-transparent hover:scale-90 hover:rotate-45 transition-all duration-300 ease-in-out'>
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
                            <button className='btn btn-circle bg-accent border-transparent hover:bg-primary hover:text-accent hover:border-transparent hover:scale-90 hover:rotate-45 transition-all duration-300 ease-in-out'>
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
        </div>
    );
};


MyProjectsCard.propTypes = {
    project: PropTypes.object
}
export default MyProjectsCard;