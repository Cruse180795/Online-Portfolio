
import { useState } from "react";

/**Icons */
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoDownload } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";

/**Components */
import NavLink from "../components/mobile/navLink";
import SocialIcon from "../components/mobile/socialIcon";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const toggleNavMenu = () => {
        
        if(isOpen){
            setIsOpen(false);
        }else{
            setIsAnimating(true);
            setIsOpen(true);
        }
        
    }

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        /**Handle Theme Toggle TODO */
    };


    return ( 
        <header className=" text-black border-b-2 border-gray-50">
            <div className="flex items-center justify-between px-4 py-6 md:p-8">
                <a href="#" className="text-3xl tracking-wide md:text-4xl">Ryan Cruse</a>
                <button onClick={toggleNavMenu} className=" bg-white px-3 py-2 rounded-md text-black border text-lg md:text-xl">
                    <IoMenu/>
                </button>


                
            </div>

            {isAnimating && (
                <div
                    className={`h-screen w-full bg-gray-800 px-4 py-6 z-10 fixed top-0 left-0 
                    transform ${isOpen ? 'animate-moveIn' : 'animate-moveOut'} md:px-8`}
                    onAnimationEnd={() => {
                    if (!isOpen) setIsAnimating(false);}}>
                    <div className="flex  justify-end mb-8">
                        {/** Close Menu Icon */}
                        <button onClick={toggleNavMenu} className=" bg-white px-3 py-2 rounded-md text-black text-lg md:text-xl">
                            <IoMdClose/>
                        </button>
                    </div>

                <hr className="text-gray-300"/>

                <div className="flex flex-col justify-between">
                    {/**Mobile Menu Items */}
                    <nav className="mt-6 md:mt-8">
                        <ul className="flex flex-col space-y-6 md:space-y-8">
                            <li>
                                <NavLink icon={<IoHome/>} name="Home" href="#home"/>
                            </li>
                            <li>
                                <NavLink icon={<IoPerson/>} name="About" href="#about"/>
                            </li>
                            <li>
                                <NavLink icon={<IoCodeSlash/>} name="Projects" href="#projects"/>
                            </li>
                            <li>
                                <NavLink icon={<IoChatbubbleEllipses/>} name="Contact" href="#contact"/>
                            </li>
                        </ul>

                        <hr className="mt-6 md:mt-8 text-gray-300"/>

                        {/** Download CV Link */}
                        <div className="mt-6 md:mt-8">
                            <a download="" target="_blank" className="flex items-center gap-x-3 text-lg font-medium bg-white text-black px-3 py-2 rounded-md">
                                <span className="border-r-2 pr-1.5"><IoDownload /></span>
                                Download CV
                            </a>
                        </div>
                    </nav>

                    <hr className="mt-6 md:mt-8 text-gray-300"/>

                        {/** Socials & Theme Change*/}
                        <div className="">
                            <hr className="text-gray-300"/>
                            
                            <div className="flex items-center justify-between mt-6 md:mt-8">

                                {/** Theme Change Button */}
                                <button className=" bg-white px-3 py-2 rounded-md text-black text-lg md:text-xl" onClick={toggleTheme}>
                                    {isDarkMode ? <IoMoon/> :<IoSunny/>}
                                </button>

                                {/** Socials */}
                                <div className="flex items-center gap-x-3 md:gap-x-5">
                                    <SocialIcon icon={<IoLogoGithub  />} href="https://github.com/Cruse180795"/>
                                    <SocialIcon icon={<IoLogoLinkedin  />} href="https://www.linkedin.com/in/ryancruse1807/"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </header>
    );
}

export default Header;