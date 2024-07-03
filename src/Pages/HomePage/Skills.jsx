
import { useEffect, useState } from 'react';
import SkillsCard from './SkillsCard';


const Skills = () => {

    const [skills, setSkills] = useState()
    useEffect(() => {
        fetch('https://hasibulislamha01.github.io/Skills-Json/skills.json')
            .then(res => res.json())
            .then(data => setSkills(data))
    }, [])
    console.log(skills)

    return (
        <div className="h-screen">
            <div className="flex items-center mb-16">
                <h1 className="text-3xl">Personal Skills </h1>
                <hr />
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 place-items-center justify-items-center gap-6 mx-auto'>
                {
                    skills?.map(skill =>
                        <SkillsCard
                            key={skill.name}
                            skill={skill}
                        ></SkillsCard>
                    )
                }
            </div>
        </div>
    );
};

export default Skills;