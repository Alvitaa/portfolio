import { useMemo, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Poster from "./Poster";
import { useTranslation } from "react-i18next";
import { projectsStatic } from "../../data/projects.data";
import type { Project } from "../../models/types";

function ProjectsPreview() {
    const { t } = useTranslation("projects");
    const [index, setIndex] = useState(0);

    const projects = useMemo(() => {
        return projectsStatic.map((project, index) => ({
            ...project,
            ...t(`list.${index}`, {returnObjects: true})
        })) as Project[];
    }, [t])


    const total = projects.length;

    function handleNext() {
        setIndex((prev) => (prev + 1) % total);
    };

    function handlePrevious() {
        setIndex((prev) => (prev - 1 + total) % total);
    };

    function getVisibleProjects() {
        const prevIndex = (index - 1 + projects.length) % projects.length;
        const nextIndex = (index + 1) % projects.length;

        return [projects[prevIndex], projects[index], projects[nextIndex]];
    }

    const visibleProjects = getVisibleProjects();

    return (
        <section id="projects" className="relative h-[95vh] max-h-screen pt-15 flex flex-col items-center place-content-start overflow-hidden">
            <div className="w-full border-neutral-50 border-t border-b shadow-m">
                <div className="w-full h-5 bg-main"></div>
                <h3 className="text-3xl font-bold text-center p-5">{t("title")}</h3>
            </div>
            <div className="w-full h-full flex flex-row place-content-center items-center">
                <button onClick={handlePrevious} className="absolute left-20 bg-white rounded-full p-2 shadow-s font-bold text-2xl z-5">
                    <FaArrowLeft />
                </button>
                <div className="w-full flex flex-row gap-40 place-content-center">
                    {visibleProjects.map((project, index) => (
                        <Poster key={index} project={project} />
                    )
                    )}
                </div>
                <button onClick={handleNext} className="absolute right-20 bg-white rounded-full p-2 shadow-s font-bold text-2xl z-5">
                    <FaArrowRight />
                </button>
            </div>
        </section>
    );
}

export default ProjectsPreview;