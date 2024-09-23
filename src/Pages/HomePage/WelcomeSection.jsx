import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import DownloadResume from '../../Components/HomePageComponents/DownloadResume';
import MotionSvg from '../../Components/MotionSvg';

const WelcomeSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, // You can customize this
        });
    }, []);



    return (
        <div
            className="h-screen lg:h-[calc(100vh-200px)] flex flex-col items-center justify-center text-center lg:space-y-12 py-12 px-2 lg:px-28 rounded-md"
        >
            <h1 className='text-primary text-center text-xl md:text-2xl font-bold my-8'>About Me</h1>

            <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0'>

                <div className='text-justify font-medium w-3/4'>
                    I am a dedicated and enthusiastic web developer with expertise in HTML, CSS, Tailwind, JavaScript, React, Firebase, Node.js, MongoDB, and Express.js. I love creating beautiful, responsive, and user-friendly websites and applications. Explore my projects to see how I bring innovative ideas to life with clean and efficient code.
                </div>

                <div className='w-fit relative'>
                    <img
                        className='w-[150px] h-[150px] profileImage rounded-full'
                        src="https://i.ibb.co/F060y4D/FB-IMG-1703931495032-2-1-removebg-preview.png" alt="hasibul image" />

                    <MotionSvg/>
                </div>
            </div>
            <DownloadResume/>
        </div>
    );
};

export default WelcomeSection;