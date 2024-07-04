import { Card } from 'antd';
import { HiOutlineSignal } from "react-icons/hi2";
import { ImEmbed2 } from 'react-icons/im';
import { IoServerOutline } from 'react-icons/io5';
import PropTypes from 'prop-types'

const ProjectCard = ({ project }) => {
    return (
        <Card
            style={{
                height: 200
            }}
        >

            <div className='flex justify-evenly items-center gap-8'>
                <div>
                    <img className='w-[250px] h-[150px] object-cover' src={project?.image} alt="" />
                </div>
                <div className='text-left'>
                    <h1 className='text-lg font-medium'>{project?.projectName}</h1>
                    <p>{project?.about}</p>
                    <div className='mt-4 flex items-center gap-4'>
                        <a
                            href={project?.liveLink}
                            target='_blank'
                            className='text-sky-600 font-medium flex items-center gap-1'
                        >
                            <HiOutlineSignal />
                            <span>Live Site</span>
                        </a>

                        <a
                            href={project?.clientSide}
                            target='_blank'
                            className='text-violet-600 font-medium flex items-center gap-1'
                        >
                            <ImEmbed2 />
                            <span>Client Site</span>
                        </a>

                        <a
                            href={project?.serverSide}
                            target='_blank'
                            className='text-green-600 font-medium flex items-center gap-1'
                        >
                            <IoServerOutline />
                            <span>Server Site</span>
                        </a>
                        
                      
                    </div>
                </div>
            </div>
        </Card>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.object
}

export default ProjectCard;