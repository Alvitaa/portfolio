import { useTranslation } from "react-i18next";
import type { Project } from "../../models/types";
import { FaCode, FaGithub } from "react-icons/fa";

interface Props {
    project: Project;
}

function Poster({ project }: Props) {
    const { t } = useTranslation("projects");
    console.log(project);

    return (
        <div
            className="flex flex-row min-w-1/2 max-w-1/2 h-[60vh] border-5 hover:scale-115 duration-300 shadow-l"
        >
            <div className="max-w-2/3 p-5 pr-10 -mr-5 flex flex-col gap-5 place-content-between">
                <div className="border-b border-neutral-400 pb-3">
                    <h3 className="text-md italic font-medium">{project.hook}</h3>
                    <p className="text-2xl font-bold">{project.title}</p>
                </div>
                <p className="text-md">{project.description}</p>
                <div className="flex flex-row border-t border-neutral-400 pt-5 text-sm place-content-between">
                    <div className="text-neutral-500 flex-1">
                        <p className="">
                            {t("role", { count: project.role.length })}: {project.role.join(", ")}
                        </p>
                        <p className="">Stack: {project.stack.join(" · ")}</p>
                    </div>
                    <div className="flex flex-col gap-2 place-content-center">
                        {project.links.repository !== null &&
                            <a className="flex flex-row font-medium underline cursor-pointer items-center gap-1" href={project.links.repository} target="_blank" rel="noopener noreferrer"><FaGithub /> Github</a>
                        }
                        {project.links.demo !== null &&
                            <a className="flex flex-row font-medium underline cursor-pointer items-center gap-1" href={project.links.demo} target="_blank" rel="noopener noreferrer"><FaCode /> Live Demo</a>
                        }
                    </div>
                </div>
            </div>
            <div className={`flex-1 flex flex-col place-content-center items-center ${project.color} p-3 mr-5 gap-4`}>
                {project.images.map((url) => (
                    <img
                        src={url}
                        alt={t("view")}
                        className={`w-fit ${project.type === "web" ? "h-fit" : "h-full"} object-contain bg-cover shadow-s hover:scale-130 duration-300`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Poster;