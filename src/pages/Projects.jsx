import React from "react";
import ProjectCard from "../components/projectCard.jsx";

const dataProjects = [
    {
        titleProjectCard: "The Blog and Information Management System",
        descriptionProjectCard:
            "The Blog and Information Management System is a web-based platform designed to streamline the creation, organization, and dissemination of announcements, articles, and updates. It allows administrators to manage content efficiently while providing users with easy access to relevant information.",
        imageProjectCard: "./src/assets/images/ImagePlaceholder.png",
        imageLaguagesProjectCard: [
            "./src/assets/images/html.png",
            "./src/assets/images/tailwindcss.png",
            "./src/assets/images/react.png",
            "./src/assets/images/git.png",
        ],
        githubLink: "",
    },
    {
        titleProjectCard: "Portfolio Website",
        descriptionProjectCard:
            "A personal portfolio showcasing web projects and skills.",
        imageProjectCard: "./src/assets/images/ImagePlaceholder.png",
        imageLaguagesProjectCard: [
            "./src/assets/images/html.png",
            "./src/assets/images/tailwindcss.png",
            "./src/assets/images/react.png",
            "./src/assets/images/git.png",
        ],
        githubLink: "",
    },
];

function Projects() {
    return (
        <div>
            {/* header  */}
            <div className="text-center p-5">
                <h3 className="mb-1 font-bold text-2xl tracking-wide">
                    PAST AND RECENT PROJECTS
                </h3>
                <p className="m-auto text-[#848484] text-[12px] tracking-wide">
                    A showcase of my past and recent web development projects
                    from beginner exercises to real-world applications
                    highlighting my growth, creativity, and technical skills.
                </p>
            </div>

            {/* Project Lists */}
            <div className="p-5 gap-x-2">
                {dataProjects.map((project, i) => (
                    <div key={i}>
                        <ProjectCard
                            imageProjectCard={project.imageProjectCard}
                            titleProjectCard={project.titleProjectCard}
                            descriptionProjectCard={
                                project.descriptionProjectCard
                            }
                            imageLaguagesProjectCard={
                                project.imageLaguagesProjectCard
                            }
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
