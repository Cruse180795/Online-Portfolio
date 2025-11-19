// React Imports
import { useState } from "react";

// Component Imports
import SectionTitle from "./ui/SectionTitle";
import SectionSubTitle from "./ui/SectionSubTitle";
import Card from "./ui/Card";
import CategoryButton from "./ui/CategoryButton";

// Data Import
import projectsData from '../data/projects.json';

const Projects = ({sectionId}) => {

    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = projectsData.filter((project) => activeCategory ==='All' || project.category === activeCategory);

    return (  
        <section className="bg-linear-to-br from-dark-500 to-dark-300 text-white py-10 space-y-10 px-4" id={sectionId}>
            <div className="text-center space-y-2">
                <SectionTitle title="My Projects" />
                <SectionSubTitle subtitle="A curated selection of my recent work" />
            </div>

            {/*Category Buttons */}
            <div className="flex items-center justify-center gap-4 flex-wrap">
                <CategoryButton
                    label="All Projects"
                    isActive={activeCategory === "All"}
                    onClick={() => setActiveCategory("All")}
                />
                <CategoryButton
                    label="Freelance Projects"
                    isActive={activeCategory === "Freelance"}
                    onClick={() => setActiveCategory("Freelance")}
                />
                <CategoryButton
                    label="Web Development"
                    isActive={activeCategory === "Web Development"}
                    onClick={() => setActiveCategory("Web Development")}
                />
                <CategoryButton
                    label="Game Development"
                    isActive={activeCategory === "Game Development"}
                    onClick={() => setActiveCategory("Game Development")}
                />


            </div>


            {filteredProjects.length === 0 && (
                <p className="text-center text-white-grey text-sm italic opacity-80">
                    {activeCategory === "Freelance"
                    ? "No freelance projects available yet."
                    : `No projects available in the "${activeCategory}" category yet.`}
                </p>
            )}


            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {filteredProjects.map((project) => (
                    <Card key={project.id} {...project} />
                ))}
            </div>

        </section>
    );
}

export default Projects;