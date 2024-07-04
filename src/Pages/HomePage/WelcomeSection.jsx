import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { GoDownload } from 'react-icons/go';

const WelcomeSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, // You can customize this
        });
    }, []);

    document.getElementById('downloadResume').addEventListener('click', function () {
        // Create an invisible anchor element
        const a = document.createElement('a');
        a.href = 'https://drive.google.com/uc?export=download&id=1apHCSsaI18_UHtlYHRk2eyv9st7_GnyL'; // Replace with the actual path to your resume
        a.download = 'hasibul_Islam_Resume.pdf'; // The name of the file to be downloaded

        // Append the anchor to the body
        document.body.appendChild(a);

        // Programmatically click the anchor to trigger the download
        a.click();

        // Remove the anchor from the document
        document.body.removeChild(a);
    });

    return (
        <div
            className="h-screen flex flex-col items-center justify-center text-center lg:space-y-12 lg:px-28 border border-blue-500"
        >
            <h1 className="text-3xl font-semibold">Welcome to my Portfolio</h1>
            <div className="text-lg leading-9">
                I am a dedicated and enthusiastic web developer with expertise in HTML, CSS, Tailwind, JavaScript, React, Firebase, Node.js, MongoDB, and Express.js. I love creating beautiful, responsive, and user-friendly websites and applications. Explore my projects to see how I bring innovative ideas to life with clean and efficient code.
            </div>
            <button id="downloadResume" className="bg-[#2f4f4f] hover:bg-[#333333] text-white font-medium py-2 px-4 rounded flex items-center gap-3">
                <span>Download Resume</span> <GoDownload />
            </button>
        </div>
    );
};

export default WelcomeSection;