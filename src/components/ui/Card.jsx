// React Icon Imports
import { FaGithubAlt } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";

const DoubleDivider = () => (
  <div className="space-y-2">
    <hr className="border border-white-grey/70" />
    <hr className="border border-white-grey/70" />
  </div>
);

const Card = ({
  projectImage,
  projectName,
  stackType,
  techStack = [],
  links = [],
  status,
}) => {
  const isCompleted = status === "Completed";
  const isInProgress = status === "In Progress";

  const languagesAndFrameworks = [];
  const tools = [];

  for (const item of techStack) {
    if (item.type === "Language" || item.type === "Framework") {
      languagesAndFrameworks.push(item);
    } else if (item.type === "Tool") {
      tools.push(item);
    }
  }

  const renderTechList = (items) => (
    <ul className="flex flex-wrap items-center gap-x-2 gap-y-3">
      {items.map((tech) => (
        <li
          key={tech.name}
          className="p-2 rounded-lg border-2 border-chalk/20 bg-chalk/5 backdrop-blur-md"
        >
          <img
            src={tech.src}
            alt={tech.name}
            loading="lazy"
            className="h-6 w-6"
          />
        </li>
      ))}
    </ul>
  );

  const getLinkStyles = (isSource) =>
    `px-4 py-2 text-sm border-2 corner-squircle rounded-4xl w-full transition-transform duration-150 hover:-translate-y-0.5 ${
      isSource
        ? "border-primary-300 bg-primary-500/30"
        : "border-secondary-300 bg-secondary-500/30"
    }`;

  return (
    <article
      className="border-2 border-white/20 bg-white/10 backdrop-blur-md rounded-lg text-chalk p-4 shadow-lg shadow-white-grey/10"
      aria-label={projectName}
    >
      {/* Image / Status */}
      <div className="mb-4">
        {isCompleted && projectImage && (
          <img
            src={projectImage}
            alt={`${projectName} preview`}
            loading="lazy"
            className="corner-squircle rounded-lg shadow-xl w-full"
          />
        )}

        {isInProgress && (
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-lg text-jet bg-gradient-to-br from-accent-300 to-accent-500">
            Work In Progress
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="my-6 space-y-5">
        {/* Title + Stack Type */}
        <header className="flex flex-col space-y-1.5">
          <h2 className="font-nunito tracking-wider font-semibold text-lg">
            {projectName}
          </h2>
          <span className="font-roboto-mono tracking-wide font-light italic text-xs">
            {stackType}
          </span>
        </header>

        <DoubleDivider />

        {/* Tech Stack – Languages & Frameworks */}
        {languagesAndFrameworks.length > 0 && (
          <section className="space-y-2">
            <h3 className="text-base font-nunito tracking-wide text-white-grey">
              Languages &amp; Frameworks
            </h3>
            {renderTechList(languagesAndFrameworks)}
          </section>
        )}

        {/* Tech Stack – Tools */}
        {tools.length > 0 && (
          <section className="space-y-2">
            <h3 className="text-base font-nunito tracking-wide text-white-grey">
              Tools
            </h3>
            {renderTechList(tools)}
          </section>
        )}

        {(languagesAndFrameworks.length > 0 || tools.length > 0) && (
          <DoubleDivider />
        )}
      </div>

      {/* Links For Source Code and Live Site */}
      {isCompleted && links.length > 0 ? (
        <div className="flex flex-col items-center gap-y-3">
          {links.map((link) => {
            const isSource = link.name === "Source Code";
            const Icon = isSource ? FaGithubAlt : RiGlobalLine;

            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={getLinkStyles(isSource)}
                aria-label={`${link.name} for ${projectName}`}
              >
                <span className="flex items-center gap-x-2 font-roboto-mono tracking-wide font-semibold">
                  <Icon size={18} />
                  <span className="border-l-2 border-chalk pl-2">
                    {link.name}
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      ) : (
        <p className="mt-4 capitalize text-center font-roboto-mono tracking-wide font-light italic text-sm border-2 p-2 rounded-lg border-white/10">
          Links to be added when available
        </p>
      )}
    </article>
  );
};

export default Card;
