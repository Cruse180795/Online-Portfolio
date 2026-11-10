import { useId } from "react";

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function FooterSection({ title, children }: FooterSectionProps) {
  const headingId = useId();
  return (
    <section aria-labelledby={headingId} className="flex flex-col gap-4">
      <h3
        id={headingId}
        className="font-jetbrains font-medium text-sm leading-140 uppercase text-green-200"
      >
        <span aria-hidden="true">//</span> {title}
      </h3>
      {children}
    </section>
  );
}
