const SocialIcon = ({href, icon, bgColor}) => {
    return ( 
        <a href={href} target="_blank" className={`px-3 py-2 rounded-lg text-black text-lg md:text-xl ${bgColor ? bgColor : 'bg-white'}`}>
            {icon}
        </a>
    );
}

export default SocialIcon;