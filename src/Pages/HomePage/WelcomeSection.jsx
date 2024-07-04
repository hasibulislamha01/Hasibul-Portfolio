import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import DownloadResume from '../../Components/DownloadResume';

const WelcomeSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, // You can customize this
        });
    }, []);

    

    return (
        <div
            className="lg:h-screen flex flex-col items-center justify-center text-center lg:space-y-12 py-12 px-2 lg:px-28 bg-[#d4d7c1] rounded-md"
        >
            <h1 className="text-3xl font-semibold mb-6">About Me</h1>
            <div className="text-base md:text-lg leading-9">
                I am a dedicated and enthusiastic web developer with expertise in HTML, CSS, Tailwind, JavaScript, React, Firebase, Node.js, MongoDB, and Express.js. I love creating beautiful, responsive, and user-friendly websites and applications. Explore my projects to see how I bring innovative ideas to life with clean and efficient code.
            </div>
            <DownloadResume></DownloadResume>
        </div>
    );
};

export default WelcomeSection;