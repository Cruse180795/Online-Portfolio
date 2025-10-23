/**Hooks */
import { useEffect, useState } from "react";

/**Components */
import SocialIcon from "../components/mobile/socialIcon";

/**Icons */
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoArrowUpSharp } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";


const Footer = () => {

    const [currentTime, setCurrentTime] = useState(new Date());


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date(), 1000);
        });

        return () => clearInterval(interval);
    }, []);

    return ( 
        <footer className="border-t p-4 space-y-4 ">
            {/**Upper Section Of Footer */}
            <div className="flex items-center justify-between">
                <h2 className="text-2xl">Ryan Cruse</h2>
                {/**Socials & Back To Top Button */}
                <div className="flex items-center gap-x-4">
                    <SocialIcon 
                        rounded={'rounded-full'}
                        bgColor={'bg-gray-100'}
                        icon={<IoLogoGithub  />} 
                        href="https://github.com/Cruse180795"/>
                    <SocialIcon 
                        bgColor={'bg-gray-100'}
                        icon={<IoLogoLinkedin  />} 
                        href="https://www.linkedin.com/in/ryancruse1807/"/>
                    <SocialIcon 
                        bgColor={'bg-gray-100'}
                        icon={<IoArrowUpSharp />} 
                        href="#hero"/>
                </div>
            </div>

            <hr className="border"/>

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <p className="text-sm">
                        Local Time: {currentTime.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit", second: "2-digit"})}
                    </p>
                    <a href="ryancruse1807@hotmail.com" className="flex items-center gap-x-1 bg-black text-white px-3 py-1 rounded-lg text-sm">
                        Get in touch
                        <IoArrowForward />
                    </a>
                </div>

            
                {/**Lower Section Of Footer */}
                <div className="flex items-center justify-between">
                    
                    <p className="text-xs text-gray-500">
                        Last updated: {new Date(document.lastModified).toLocaleDateString()}
                    </p>
                    <p className="text-xs text-gray-400">
                        Built with <span className="text-accent">React</span> & <span className="text-accent">TailwindCSS</span>
                    </p>
                    
                </div>
            </div>

            <p className="text-center mt-4">
                <FaRegCopyright className="inline mb-1"/> 2024 Ryan Cruse. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;