// Import Icons
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-jet bg-white-grey p-4 space-y-4">
      <div className="text-center space-y-1.5 font-roboto-mono tracking-wide text-sm">
        <p>© {currentYear} Ryan Cruse. All rights reserved.</p>
        <p>Built with React & Tailwind</p>
      </div>
      <div className="py-2">
        <hr className="border border-oxford-blue/60" />
      </div>

      <nav aria-label="Social links" className="flex items-center justify-center gap-x-4">
        <a
          href="https://github.com/Cruse180795"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-x-2 text-sm px-4 py-2 corner-squircle rounded-4xl border-2 border-primary-300 text-chalk bg-primary-500/30 font-roboto-mono tracking-wide font-semibold"
        >
          <FaGithubAlt className="text-base" />
          <span className="border-l-2 pl-2">Github</span>
        </a>

        <a
          href="https://www.linkedin.com/in/ryancruse1807/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-x-2 text-sm px-4 py-2 corner-squircle rounded-4xl border-2 border-secondary-300 text-chalk bg-secondary-500/30 font-roboto-mono tracking-wide font-semibold"
        >
          <FaLinkedinIn className="text-base" />
          <span className="border-l-2 pl-2">LinkedIn</span>
        </a>

      </nav>
    </footer>
  );
}

export default Footer;
