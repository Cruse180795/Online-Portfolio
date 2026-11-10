/* Icons */
import ArrowUpIcon from "../../icons/ArrowUpIcon";

export default function FooterBottom() {
  const year = new Date().getFullYear();
  return (
    <div className="flex flex-col gap-3 md:flex-row md:justify-between">
      <small className="text-xs leading-140 font-jetbrains-mono tracking-wide-1 uppercase">
        © {year} Ryan Cruse. ALL RIGHTS RESERVED.
      </small>

      <a
        href="#about"
        className="flex items-center gap-2 text-xs uppercase tracking-wide-1 leading-140 transition-colors duration-300 ease-in-out hover:text-neutral-100 focus-visible:text-neutral-100 focus-visible:border-2 focus-visible:border-green-200 focus-visible:border-dashed focus-visible:outline-none"
      >
        Back to top
        <ArrowUpIcon className="size-4" />
      </a>
    </div>
  );
}
