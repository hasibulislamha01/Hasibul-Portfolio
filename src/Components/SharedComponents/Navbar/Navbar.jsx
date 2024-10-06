import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import menuIcon from '../../../../public/menuIcon.svg'


const Navbar = () => {

    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, [])

    const navigationMenues = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Projects',
            link: '/projects'
        },
        {
            title: 'Blogs',
            link: '/blogs'
        },
    ]

    const activeClass = `text-accent` ;
    const inactiveClass = `text-secondary` ; 


    const openSideNav = () => {
        const sideNav = document.querySelector('.sideNav')
        sideNav.classList.remove('hidden')
        sideNav.classList.add('flex')
    }

    const hideSideBar = () => {
        const sideNav = document.querySelector('.sideNav')
        sideNav.classList.remove('flex')
        sideNav.classList.add('hidden')
    }


    return (
        // navbar container
        <div className={`w-full h-[50px] z-50 fixed bg-primary`}>
            <div className="h-full container mx-auto">

                {/* nav title and hamberger icon ----- visible in smaller devices*/}
                <div className="h-full px-4 md:hidden flex items-center justify-between">

                    <NavLink to={'/'} className='font-bold text-xl text-accent'>Hasibul Islam</NavLink>

                    <div className="" onClick={openSideNav}>
                        <img src={menuIcon} alt="menu icon" className="h-full" />
                    </div>

                </div>

                {/* horizontal navbar --- (visible in larger screens) */}
                <div className="hidden md:flex h-full px-2 md:px-4 items-center gap-6 font-semibold">

                    <NavLink
                        to='/'
                        className={`mr-auto font-bold text-xl ${isSticky ? 'text-accent' : 'text-secondary'}`}
                    >
                        Hasibul Islam
                    </NavLink>

                    {
                        navigationMenues.map(route =>
                            <NavLink
                                key={route.link}
                                to={route.link}
                                className={({ isActive }) => isActive ? 'text-accent' : 'text-secondary'}
                            >
                                {route.title}
                            </NavLink>
                        )
                    }

                </div>

                {/* vertical navbar */}
                <div className="sideNav hidden shadow-lg shadow-gray-400 w-[250px] h-screen fixed top-0 right-0  bg-primary bg-opacity-95 backdrop-blur-lg  flex-col">

                    {/* close icon */}
                    <svg onClick={hideSideBar} className="m-2 p-2 cursor-pointer rounded-full hover:bg-slate-800" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                    <div className="w-full pt-4 flex flex-col justify-start items-start">
                        {
                            navigationMenues?.map(item =>
                                <NavLink
                                    key={item.link}
                                    to={item.link}
                                    className={({ isActive }) => isActive ? `${activeClass}  w-full  px-8 py-3 hover:bg-slate-800` : `${inactiveClass} w-full py-3 px-8 hover:bg-slate-800`}
                                >{item.title}</NavLink>
                            )
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;