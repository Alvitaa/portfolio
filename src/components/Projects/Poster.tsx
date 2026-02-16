import { useTranslation } from "react-i18next";
import type { Project } from "../../models/types";

interface Props {
    project: Project;
}

function Poster({ project }: Props) {
    const { t } = useTranslation("projects");

    return (
        <div
            className="flex flex-row min-w-1/2 max-w-1/2 h-[60vh] border-5 hover:scale-115 duration-300 shadow-l"
        >
            <div className="max-w-2/3 p-5 pr-10 -mr-5 flex flex-col gap-5 place-content-between">
                <div className="border-b border-neutral-400 pb-5">
                    <h3 className="text-lg italic font-medium">{project.hook}</h3>
                    <p className="text-2xl font-bold">{project.title}</p>
                </div>
                <p className="">{project.description}</p>
                <div className="border-t border-neutral-400 pt-5">
                    <p className="">
                        {t("role", { count: project.role.length })}: {project.role.join(", ")}
                    </p>
                    <p className="">Stack: {project.stack.join(" · ")}</p>
                </div>
            </div>
            <div className={`flex-1 flex flex-col ${project.color} p-3 mr-5 gap-4`}>
                <div className="w-full flex-1 bg-neutral-400">1</div>
                <div className="w-full flex-1 bg-neutral-400">1</div>
                <div className="w-full flex-1 bg-neutral-400">1</div>
            </div>
        </div>
    );
}

export default Poster;