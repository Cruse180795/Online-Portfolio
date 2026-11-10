import type { SVGProps } from "react";

/* Icon Type */
export type IconProps = SVGProps<SVGSVGElement>;

/* Nav Link Type */
export interface NavLink {
  title: string;
  id: string;
}

/* Social Link Type */
export interface SocialLink {
  label: string;
  href: string;
}
