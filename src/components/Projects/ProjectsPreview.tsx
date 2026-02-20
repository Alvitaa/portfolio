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
            ...t(`list.${index}`, { returnObjects: true })
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
            <div className="w-full h-full flex flex-row place-content-center items-center">
                <button onClick={handlePrevious} className="absolute left-20 bg-white rounded-full p-2 shadow-s font-bold text-2xl z-5">
                    <FaArrowLeft />
                </button>
                <div className="w-full flex flex-row gap-[10vw] place-content-center">
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