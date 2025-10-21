const NavLink = ({icon, name, href}) => {
    return ( 
        <a href={href} className="flex items-center gap-x-3 text-lg font-medium bg-white text-black px-3 py-2 rounded-md md:text-xl">
            <span className="border-r-2 pr-1.5">
                {icon}
            </span>
            {name}
        </a>
    );
}

export default NavLink;