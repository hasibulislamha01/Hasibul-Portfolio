import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const WelcomeSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, // You can customize this
        });
    }, []);

    return (
        <div
            className="h-screen flex flex-col items-center justify-center text-center lg:space-y-12 container mx-auto lg:px-28 border border-blue-500"
        >
            <h1 className="text-3xl font-semibold">Welcome to my Portfolio</h1>
            <div className="text-lg leading-9">
                I am a dedicated and enthusiastic web developer with expertise in HTML, CSS, Tailwind, JavaScript, React, Firebase, Node.js, MongoDB, and Express.js. I love creating beautiful, responsive, and user-friendly websites and applications. Explore my projects to see how I bring innovative ideas to life with clean and efficient code.
            </div>
        </div>
    );
};

export default WelcomeSection;