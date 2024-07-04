import Contact from "./Contact";

const WorkTogether = () => {
    const heading = "Let's Work Together"
    const paragraph = "Whether it's a dynamic web application, a robust backend system, or a sleek, responsive frontend, the possibilities are endless. With expertise in HTML, CSS, Tailwind, JavaScript, React, Firebase, Node.js, MongoDB, and Express.js, I am passionate about turning ideas into reality. Let's explore how we can collaborate to create something truly exceptional. If you're ready to take the next step, feel free to reach out—I'd love to hear about your vision and discuss how we can make it happen together."
    return (
        <div className="text-center h-screen ">
            <div className="flex flex-col justify-center">
                <h1 className="text-3xl mb-12">{heading}</h1>
                <div className="w-full md:w-4/5 mx-auto">

                    {paragraph}

                </div>
            </div>
            <Contact></Contact>
        </div>
    );
};

export default WorkTogether;