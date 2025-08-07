import React from "react";

const ProjectCard = ({
    titleProjectCard,
    descriptionProjectCard,
    imageProjectCard,
    imageLaguagesProjectCard,
    githubLink,
}) => {
    return (
        <>
            <div className="shadow-[0px_0px_50px_2px_rgba(51,_65,_85,_0.30)] p-7 rounded-lg sm:w-80 md:w-80 lg:w-75 h-100">
                <div>
                    <img
                        src={imageProjectCard}
                        alt=""
                        className="w-full rounded-md mb-4 sm:w-full md:w-full lg:w-full"
                    />
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-3">
                        {titleProjectCard}
                    </h3>
                    <p className="text-sm text-justify mb-3 text-[#848484]">
                        {descriptionProjectCard}
                    </p>
                    <div className="grid grid-cols-2">
                        <div className="flex gap-2 items-center">
                            {imageLaguagesProjectCard?.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt="imageLanguages"
                                    className="w-5 h-5 rounded object-cover hover:scale-130 duration-400 ease-in-out"
                                />
                            ))}
                        </div>

                        <a
                            href={githubLink}
                            className="rounded-3xl border-1 p-2 flex items-center justify-center w-35 lg:w-30 lg:ml-2">
                            <img
                                src="./src/assets/images/github.png"
                                alt=""
                                className="w-4.5"
                            />
                            <label className="pl-2 text-sm">Interested</label>
                        </a>
                    </div>
                </div>
            </div>

            <br />
        </>
    );
};

export default ProjectCard;
