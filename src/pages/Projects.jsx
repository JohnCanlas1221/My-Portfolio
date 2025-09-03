import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";

const dataProjects = [
    {
        titleProjectCard: "Figma Design UI/UX Projects",
        descriptionProjectCard:
            "UI/UX design projects in Figma, featuring modern layouts, wireframes, prototypes, and creative concepts that balance functionality with visual appeal.",
        imageProjectCard: "/assets/images/figmaedits.png",
        imageLaguagesProjectCard: ["/assets/images/figma.png"],
        githubLink:
            "https://www.figma.com/design/oxSX90qPAA1di1uDKtE9FZ/Figma-Projects?node-id=1-3&t=ejM4UdsBnqLiIK6f-1",
    },
    {
        titleProjectCard: "The Blog and Information Management System",
        descriptionProjectCard:
            "The Blog and Information Management System is a web-based platform designed to streamline the creation, organization and updates.",
        imageProjectCard: "/assets/images/SchoolBlog.png",
        imageLaguagesProjectCard: [
            "/assets/images/html.png",
            "/assets/images/css.png",
            "/assets/images/csharp.png",
            "/assets/images/git.png",
        ],
        githubLink:
            "https://github.com/JohnCanlas1221/Blog-and-Information-Management-System",
    },
    {
        titleProjectCard: "Portfolio Website ( Front End )",
        descriptionProjectCard:
            "The Web Portfolio System is a platform that showcases my web development skills, projects, and achievements with a clean, responsive design.",
        imageProjectCard: "/assets/images/Portfolio.png",
        imageLaguagesProjectCard: [
            "/assets/images/html.png",
            "/assets/images/tailwindcss.png",
            "/assets/images/react.png",
            "/assets/images/git.png",
        ],
        githubLink: "https://github.com/JohnCanlas1221/My-Portfolio",
    },
    {
        titleProjectCard: "Employer Tracking System ( OJT )",
        descriptionProjectCard:
            "The Employer Tracking System is a form platform that tracks an employer’s building using Google search data, providing real-time monitoring without GPS or APIs.",
        imageProjectCard: "/assets/images/ERTS.png",
        imageLaguagesProjectCard: [
            "/assets/images/visualstudio.png",
            "/assets/images/sqlserver.png",
            "/assets/images/git.png",
        ],
        githubLink:
            "https://github.com/JohnCanlas1221/Employer-Tracking-System-OJT-PROJECT",
    },
    {
        titleProjectCard: "Adobo Photoshop Editing ( CS6 ) ",
        descriptionProjectCard:
            "The Photoshop Editing (CS6) system highlights my ability to create and enhance visuals through techniques in Photoshop CS6, showcasing my skills in image creativity.",
        imageProjectCard: "/assets/images/photoshopedits.png",
        imageLaguagesProjectCard: ["/assets/images/photoshop.png"],
        githubLink: "https://github.com/JohnCanlas1221/PhotoshopCS6",
    },
];

function Projects() {
    return (
        <div>
            {/* header  */}
            <div className="text-center p-5">
                <h3 className="mb-1 font-bold text-2xl tracking-wide text-white">
                    PAST AND RECENT PROJECTS
                </h3>
                <p className="m-auto text-[#848484] text-[12px] tracking-wide">
                    A showcase of my past and recent web development projects
                    from beginner exercises to real-world applications
                    highlighting my growth, creativity, and technical skills.
                </p>
            </div>

            {/* Project Lists */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5">
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
                            githubLink={project.githubLink}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
