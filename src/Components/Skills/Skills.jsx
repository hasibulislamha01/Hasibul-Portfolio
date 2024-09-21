import { useEffect, useState } from 'react';
import useAxiosSecure from '../../CustomHooks/useAxiosSecure';
import SkillCard from './SkillCard'
import RoundSkeleton from '../Skeletons/RoundSkeleton';
import skillsData from '../../assets/skills.json'

const Skills = () => {

    const axiosSecure = useAxiosSecure()
    const [skills, setSkills] = useState([])

    useEffect(() => {
        axiosSecure.get('/skills')
            .then(response => setSkills(response?.data))
            .catch(error => console.error(`error loading skills data`, error?.message))
    }, [axiosSecure])

    console.log(skills);

    return (
        <div className='min-h-screen flex flex-col justify-center gap-12'>
            <h1 className='text-center font-bold text-3xl'>Skills</h1>
            {
                !skills ?
                    <div className='grid grid-cols-1 md:grid-cols-3 place-items-center'>
                        <RoundSkeleton />
                        <RoundSkeleton />
                        <RoundSkeleton />
                    </div>
                    :
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-10'>
                        {
                            skillsData?.map((skill, index) =>
                                <SkillCard
                                    key={skill.name}
                                    skill={skill}
                                    delaytime={index}
                                />
                            )
                        }
                    </div>

            }
        </div>
    );
};

export default Skills;