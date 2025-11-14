const MobileNavLink = ({icon, linkTo, linkName}) => {
    return ( 
        <li className="flex items-center gap-x-2 p-2 border-2 border-white/20 rounded-lg shadow-xl">
            {icon}
            <a href={linkTo} className="border-l-2 pl-2 border-white/20">{linkName}</a>
        </li>
    );
}

export default MobileNavLink;