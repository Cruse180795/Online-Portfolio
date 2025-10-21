const SocialIcon = ({href, icon}) => {
    return ( 
        <a href={href} target="_blank" className=" bg-white px-3 py-2 rounded-md text-black text-lg md:text-xl">
            {icon}
        </a>
    );
}

export default SocialIcon;