import FooterSection from "./FooterSection";

import type { SocialLink } from "../../../types";

interface FooterSocialsProps {
  socials: SocialLink[];
}

export default function FooterSocials({ socials }: FooterSocialsProps) {
  return (
    <FooterSection title="Socials">
      <ul className="space-y-3">
        {socials.map((social) => (
          <li key={social.href}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-transparent font-jetbrains text-sm leading-140 transition-[color] duration-300 ease-in-out hover:text-neutral-100 focus-visible:text-neutral-100 focus-visible:border-green-200 focus-visible:border-dashed focus-visible:outline-none"
            >
              {social.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </FooterSection>
  );
}
