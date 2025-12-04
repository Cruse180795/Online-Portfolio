import { useState } from "react";

/** Icons */
import { RiMenuAddLine } from "react-icons/ri";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaHouse } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


/** Components */
import MobileNavLink from "./ui/MobileNavLink";

const Nav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        console.log("Menu toggled");
        setIsMenuOpen(!isMenuOpen);
    }


    return (
        <nav className="px-4 py-5 flex items-center justify-between border-b border-white/20 relative shadow-xl">
            {/**Brand */}
            <h1 className="text-white font-nunito font-semibold tracking-wider text-2xl border-b-2 pb-0.5 border-white/20 shadow-xl">Ryan Cruse</h1>

            {/**Hamburger Menu */}
            <button className="p-2 bg-white/10 backdrop-blur-md shadow-xl border-2 border-white/20 rounded-lg" onClick={handleMenuToggle}>
                {isMenuOpen ? <RiCloseLargeFill color="white" size={18}/> : <RiMenuAddLine color="white" size={18}/>  }
            </button>

             {/** Mobile Menu */}
            {isMenuOpen && (
                <div className="z-10 absolute top-full left-0 w-full h-screen bg-black/50 text-white px-4 py-6 backdrop-blur-2xl space-y-6">
                    <ul className="space-y-4 font-roboto-mono tracking-wide">
                        <MobileNavLink icon={<FaHouse size={18}/>} linkTo="#home" linkName="Home"/>
                        <MobileNavLink icon={<FaUser size={18}/>} linkTo="#about" linkName="About"/>
                        <MobileNavLink icon={<FaProjectDiagram size={18}/>} linkTo="#projects" linkName="Projects"/>
                        <MobileNavLink icon={<FaEnvelope size={18}/>} linkTo="#contact" linkName="Contact Me"/>
                    </ul>

                    <hr className="border border-white/30"/>

                    <ul className="space-y-4 font-roboto-mono tracking-wide">
                        <MobileNavLink icon={<FaGithub size={18}/>} linkTo="https://github.com/Cruse180795" linkName="GitHub"/>
                        <MobileNavLink icon={<FaLinkedinIn size={18}/>} linkTo="https://www.linkedin.com/in/ryancruse1807/" linkName="LinkedIn"/>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Nav;
