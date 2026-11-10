/* Components */
import FooterBrand from "../ui/footer/FooterBrand";
import FooterNavigation from "../ui/footer/FooterNavigation";
import FooterSocials from "../ui/footer/FooterSocials";
import FooterLocation from "../ui/footer/FooterLocation";
import FooterBottom from "../ui/footer/FooterBottom";

/* Types */
import type { NavLink, SocialLink } from "../../types";

interface FooterProps {
  links: NavLink[];
  socials: SocialLink[];
}

export default function Footer({ links, socials }: FooterProps) {
  return (
    <footer className="bg-neutral-800">
      {/* Inner container */}
      <div className="space-y-8 px-4 pb-5 pt-8 md:space-y-10 md:px-5 md:pb-6 md:pt-10 lg:px-10 lg:max-w-7xl lg:mx-auto">
        {/* Top of footer  */}
        <div className="flex flex-col gap-5 md:gap-8 lg:flex-row lg:justify-between lg:gap-12">
          <FooterBrand />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <FooterNavigation links={links} />
            <FooterSocials socials={socials} />
            <FooterLocation />
          </div>
        </div>

        {/* Bottom of footer */}
        <div className="space-y-5 md:space-y-6">
          <hr className="border-t border-t-neutral-500" aria-hidden="true" />
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
}
