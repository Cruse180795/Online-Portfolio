const NavLink = ({icon, name, href}) => {
    return ( 
        <a href={href} className="flex items-center gap-x-3 text-lg font-medium bg-white text-black px-3 py-2 rounded-md">
            {icon}
            {name}
        </a>
    );
}

export default NavLink;