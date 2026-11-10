import FooterSection from "./FooterSection";

import type { NavLink } from "../../../types";

interface FooterNavigationProps {
  links: NavLink[];
}

export default function FooterNavigation({ links }: FooterNavigationProps) {
  return (
    <FooterSection title="Navigation">
      <nav aria-label="Footer">
        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="inline-block border-2 border-transparent font-jetbrains text-sm leading-140 transition-all duration-300 ease-in-out hover:text-neutral-100 focus-visible:text-neutral-100 focus-visible:border-green-200 focus-visible:border-dashed focus-visible:outline-none"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </FooterSection>
  );
}
