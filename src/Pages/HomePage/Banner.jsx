import './home.css'

const Banner = () => {
    return (
        <div className='p-16 lg:p-32 bg-[#e1e2db] h-screen border border-red-400'>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
                <div className="space-y-2 md:space-y-4 text-[#333333]">
                    <h3 className="text-xl md:text-3xl font-semibold">I am Hasibul</h3>
                    <h3 className="text-xl md:text-3xl">A passionate
                    </h3>
                    <h1 className="text-5xl font-bold uppercase hidden md:inline-block text-[#2f4f4f]">Web Developer</h1>
                </div>

                <div className='space-y-12'>
                    <img className="profileImage w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] rounded-full" src="https://i.ibb.co/F060y4D/FB-IMG-1703931495032-2-1-removebg-preview.png" alt="" />
                    <h1 className="text-3xl font-bold uppercase text-center md:hidden">Web Developer</h1>
                </div>

            </div>
        </div>
    );
};

export default Banner;