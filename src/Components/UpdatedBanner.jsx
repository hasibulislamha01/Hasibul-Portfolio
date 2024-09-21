import { easeInOut, motion } from 'framer-motion'


const slidingVariant = {
    initial: {
        opacity: 0,
        x: -150
    },
    animate: (custom) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            delay: custom,
            ease: easeInOut
        }
    })
}


const UpdatedBanner = () => {
    return (
        <motion.div className='p-16 lg:p-32 bg-[#e1e2db] min-h-screen flex flex-col items-center justify-center'>
            <motion.div className="relative container flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0 w-fit mx-auto">

                <motion.div
                    className={`absolute 
                    top-[-10%] left-[-20%] 
                    md:top-[-10%] md:left-[-95%] 
                    lg:top-[-5%] lg:left-[-40%] 
                    xl:top-[-10%] xl:left-[-35%] 
                    2xl:top-[-10%] 2xl:left-[-40%] 
                    `}
                >

                    <motion.h3
                        variants={slidingVariant}
                        initial='initial'
                        whileInView='animate'
                        custom={0.1}
                        className="font-medium text-sm md:text-base lg:text-xl text-right tracking-[1px] md:tracking-[2px]"
                    >I am
                    </motion.h3>

                    <motion.h3
                        variants={slidingVariant}
                        initial="initial"
                        whileInView="animate"
                        custom={0.3}
                        className="text-lg md:text-2xl font-bold tracking-[2px] md:tracking-[5px] text-[#2f4f4f]">
                        Hasibul Islam
                    </motion.h3>

                </motion.div>

                <div className='space-y-12'>
                    <img className="profileImage w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] rounded-full" src="https://i.ibb.co/F060y4D/FB-IMG-1703931495032-2-1-removebg-preview.png" alt="" />
                </div>

                <motion.div
                    className={`space-y-1 absolute  
                    right-[-25%] bottom-[-20%] 
                    md:right-[-105%] md:bottom-[-15%] 
                    lg:right-[-85%]  lg:bottom-[-10%] 
                    `}
                >
                    <motion.h3 
                    variants={slidingVariant}
                    initial='initial'
                    whileInView='animate'
                    custom={0.1}
                    className="font-medium text-base md:text-lg lg:text-xl text-right md:text-left tracking-[1px] md:tracking-[2px]"
                    >A passionate</motion.h3>

                    <motion.h1 
                    variants={slidingVariant}
                    initial='initial'
                    whileInView='animate'
                    custom={0.3}
                    className="text-xl md:text-2xl lg:text-[40px] font-bold text-[#2f4f4f] uppercase tracking-[2px] md:tracking-[3px] lg:tracking-[5px]">web developer</motion.h1>
                </motion.div>

            </motion.div>
        </motion.div>
    );
};

export default UpdatedBanner;