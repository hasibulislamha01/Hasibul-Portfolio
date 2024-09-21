import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";



const Navbar = () => {

    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, [])

    const routesCollection = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Blogs',
            link: '/blogs'
        },
    ]



    return (
        // navbar container
        <div className={`w-full h-[50px] z-50 fixed ${isSticky ? 'bg-sky-50' : 'bg-transparent'}`}>
            <div className="h-full container mx-auto  border border-red-300">

                {/* nav title ----- My name visible in smaller devices*/}
                <div className="hidden">
                    <a className="font-semibold text-xl">Hasibul Islam</a>
                </div>

                {/* horizontal navbar --- (visible in larger screens) */}
                <div className="hidden md:flex h-full px-2 md:px-4 items-center gap-6  border border-blue-500">

                    <NavLink
                        to='/'
                        className='mr-auto font-bold'
                    >
                        Hasibul Islam
                    </NavLink>

                    {
                        routesCollection.map(route =>
                            <NavLink
                                key={route.link}
                                to={route.link}
                                className={`font-semibold`}
                            >
                                {route.title}
                            </NavLink>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;