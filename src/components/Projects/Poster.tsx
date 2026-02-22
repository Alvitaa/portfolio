import { useTranslation } from "react-i18next";
import type { Project } from "../../models/types";
import { FaCode, FaGithub, FaImage } from "react-icons/fa";
import { useState } from "react";
import ImageModal from "./ImageModal";
import Modal from "../Modal/Modal";

interface Props {
    project: Project;
}

function Poster({ project }: Props) {
    const { t } = useTranslation("projects");
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    function openModal(index: number) {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    function nextImage() {
        setCurrentIndex((prev) =>
            prev === project.images.length - 1 ? 0 : prev + 1
        );
    };

    function prevImage() {
        setCurrentIndex((prev) =>
            prev === 0 ? project.images.length - 1 : prev - 1
        );
    };

    return (<>
        <div
            className="flex flex-col md:flex-row w-full h-[70vh] md:h-[65vh] border-5 hover:scale-115 duration-300 shadow-l"
        >
            <div className="md:max-w-2/3 md:pr-5 md:-mr-5 h-full flex flex-col gap-2 md:gap-2 text-center md:text-left">
                <div className={`${project.color} ${project.textColor} md:text-black p-5 md:p-0 md:m-5 md:bg-transparent md:border-b md:border-neutral-400 pb-3 md:mb-0`}>
                    <h3 className="text-xs md:text-sm xl:text-base 2xl:text-4xl italic font-medium pb-2">{project.hook}</h3>
                    <p className="text-sm md:text-xl xl:text-2xl 2xl:text-5xl font-bold">{project.title}</p>
                </div>
                <p className="flex-2 flex items-center px-6 py-3 md:px-5 md:py-2 text-xs md:text-sm xl:text-base 2xl:text-3xl">{project.description}</p>
                <div className="flex-1 flex flex-col pt-5 md:pt-2 mx-5 md:mx-5 md:flex-row border-t border-neutral-400 text-xs md:items-center md:text-sm place-content-between">
                    <div className="text-neutral-500 flex-1 md:pr-2">
                        <p className="">
                            {t("role", { count: project.role.length })}: {project.role.join(", ")}
                        </p>
                        <p className="">Stack: {project.stack.join(" · ")}</p>
                    </div>
                    <div className="flex pt-2 md:pt-0 md:flex-col gap-2 place-content-center text-sm">
                        {project.links.repository !== null &&
                            <a className="flex flex-row font-medium underline cursor-pointer items-center gap-1" href={project.links.repository} target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                                Github
                            </a>
                        }
                        {project.links.demo !== null &&
                            <a className="flex flex-row font-medium underline cursor-pointer items-center gap-1" href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                <FaCode />
                                Live Demo
                            </a>
                        }
                    </div>
                </div>
                    <button className={`${project.color} ${project.textColor} m-2 rounded-lg p-3 font-bold flex items-center gap-2 place-content-center md:hidden`} onClick={() => openModal(0)}>
                        {t("gallery")}
                        <FaImage className="text-lg"/>
                    </button>
            </div>
            <div className={`hidden md:flex flex-1  flex-col place-content-center items-center ${project.color} p-3 mr-5 gap-4`}>
                {project.images.slice(0, 3).map((url, index) => (
                    <img
                        key={index}
                        src={url}
                        alt={t("view")}
                        onClick={() => openModal(index)}
                        className={`w-fit ${project.type === "web" ? "h-fit" : "h-full"} object-contain bg-cover shadow-s`}
                    />
                ))}
            </div>
        </div>
        {isOpen && (
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <ImageModal
                    images={project.images}
                    currentIndex={currentIndex}
                    onNext={nextImage}
                    onPrev={prevImage}
                />
            </Modal>
        )
        }
    </>
    );
}

export default Poster;