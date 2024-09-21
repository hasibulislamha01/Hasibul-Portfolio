import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    console.log(project);
    return (
        <div className='flex items-center justify-between'>

            <div className='space-y-6'>
                <h1 className='text-7xl leading-none font-extrabold text-transparent text-outline'>{project?.projectName}</h1>
                <p className='text-lg font-semibold w-3/4'>
                    {project?.about}
                </p>

                <Link to={project?.liveLink}>
                    <button className='btn bg-accent hover:rounded-full hover:bg-primary hover:text-accent'>
                        Live Site
                    </button>
                </Link>
            </div>

            <div>
                <img
                    src={project?.image}
                    alt={`image of ${project?.projectName}`}
                    className='w-[300px]'
                />
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.object
}

export default ProjectCard;