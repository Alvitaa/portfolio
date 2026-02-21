import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { projectsStatic } from "../../data/projects.data";
import type { Project } from "../../models/types";
import Carousel from "../Carousel/Carousel";

function ProjectsPreview() {
    const { t } = useTranslation("projects");

    const projects = useMemo(() => {
        return projectsStatic.map((project, index) => ({
            ...project,
            ...t(`list.${index}`, { returnObjects: true })
        })) as Project[];
    }, [t])

    return (
        <section id="projects" className="relative h-[95vh] max-h-screen pt-15 flex flex-col items-center place-content-start overflow-hidden">
            <div className="w-full border-neutral-50 border-t border-b shadow-m cursor-default">
                <div className="w-full h-5 bg-main" />
                <h3 className="w-full flex flex-row items-center gap-8 place-content-center text-3xl font-bold text-center p-5">
                    <p className="flex items-center justify-center rounded-md border-3 text-base px-2 pr-2.5 font-black">1</p>
                    {t("title")}
                    <div className="flex flex-row gap-2">
                        <p className="flex items-center justify-center bg-green-700 text-white rounded-full text-base h-8 w-8" title="Frontend">F</p>
                        <p className="flex items-center justify-center bg-blue-700 text-white rounded-full text-base h-8 w-8" title="Backend">B</p>
                    </div>
                </h3>
            </div>
            <Carousel projects={projects}/>
        </section>
    );
}

export default ProjectsPreview;