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

    const routesCollection = [
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



    return (
        // navbar container
        <div className={`w-full h-[50px] z-50 fixed bg-primary`}>
            <div className="h-full container mx-auto">

                {/* nav title ----- My name visible in smaller devices*/}
                <div className="hidden">
                    <a className="font-semibold text-xl">Hasibul Islam</a>
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
                        routesCollection.map(route =>
                            <NavLink
                                key={route.link}
                                to={route.link}
                                className={({ isActive }) => isActive ? 'text-accent' : 'text-secondary'}
                            >
                                {route.title}
                            </NavLink>
                        )
                    }

                    <img src={menuIcon} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;