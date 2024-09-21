import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const SkillCard = ({ skill, delaytime }) => {

    // console.log(typeof delaytime);

    const staggeredVariant = {
        initial: {
            opacity: 0,
            y: 200,
        },
        animate: () => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: delaytime * 0.25
            }
        })

    }

    return (
        <motion.div
            variants={staggeredVariant}
            initial='initial'
            whileInView='animate'
            viewport={{
                once: true
            }}
            className="flex flex-col justify-center items-center">
            <img
                src={skill?.icon}
                alt={skill?.name}
                width={50}
                height={50}
                className=""
            />
            <h3 className="mt-2 text-lg font-bold text-primary">{skill?.name}</h3>
        </motion.div>
    );
};

SkillCard.propTypes = {
    skill: PropTypes.object,
    delaytime: PropTypes.number
}
export default SkillCard;