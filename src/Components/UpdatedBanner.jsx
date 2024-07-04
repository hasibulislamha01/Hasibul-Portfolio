
const UpdatedBanner = () => {
    return (
        <div className='p-16 lg:p-32 bg-[#e1e2db] min-h-screen'>
            <div className="relative container mx-auto flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0">
                {/* <div className="space-y-2 md:space-y-4 text-[#333333]">
                    <h3 className="text-xl md:text-3xl font-semibold">I am Hasibul</h3>
                    <h3 className="text-xl md:text-3xl">A passionate
                    </h3>
                    <h1 className="text-5xl font-bold uppercase hidden md:inline-block text-[#2f4f4f]">Web Developer</h1>

                </div> */}
                <div className="absolute top-[10%] left-[-30%] lg:top-[10%] lg:left-[18%]">

                    <h3 className="text-sm font-medium lg:text-xl md:text-3xl text-right">I am</h3>

                    <h3 className="text-lg md:text-3xl font-semibold text-[#2f4f4f]">Hasibul Islam</h3>

                </div>

                <div className='space-y-12'>
                    <img className="profileImage w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] rounded-full" src="https://i.ibb.co/F060y4D/FB-IMG-1703931495032-2-1-removebg-preview.png" alt="" />
                </div>

                <div className="absolute  bottom-[-10%] right-[-30%] lg:bottom-[10%]  lg:right-[5%]">
                    <h3 className="text-lg lg:text-xl text-right lg:text-left">A passionate</h3>
                    <h1 className="text-2xl lg:text-[40px] font-bold text-[#2f4f4f] uppercase">web developer</h1>
                </div>

            </div>
        </div>
    );
};

export default UpdatedBanner;