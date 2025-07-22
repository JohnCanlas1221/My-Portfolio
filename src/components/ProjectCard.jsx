import React from "react";

const projectCard = ({
    titleProjectCard,
    descriptionProjectCard,
    imageProjectCard,
    imageLaguagesProjectCard,
    githubLink,
}) => {
    return (
        <>
            <div className="shadow-[0px_0px_50px_2px_rgba(51,_65,_85,_0.30)] p-7 rounded-lg">
                <div>
                    <img
                        src={imageProjectCard}
                        alt=""
                        className="w-full rounded-md mb-4"
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
                        <div className="flex gap-2">
                            {imageLaguagesProjectCard?.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt="imageLanguages"
                                    className="w-6 h-6 rounded object-cover"
                                />
                            ))}
                        </div>
                        <a href={githubLink}>Visit</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default projectCard;
