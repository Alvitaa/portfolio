import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Poster from "./Poster";

const projects = [
    { id: "01", title: "Datos que hablan", subtitle: "Dashboard analítico", color: "bg-blue-500" },
    { id: "02", title: "Contenido que conecta", subtitle: "Blog técnico", color: "bg-orange-500" },
    { id: "03", title: "Gestión simplificada", subtitle: "App financiera", color: "bg-purple-500" },
    { id: "04", title: "Compra sin barreras", subtitle: "E-commerce accesible", color: "bg-emerald-500" },
];

function ProjectsPreview() {
    const [index, setIndex] = useState(0);
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
                <h3 className="text-3xl font-bold text-center p-5">Estación: Mis Proyectos</h3>
            </div>
            <div className="w-full h-full flex flex-row place-content-center items-center">
                <button onClick={handlePrevious} className="absolute left-20 bg-white rounded-full p-2 shadow-s font-bold text-2xl z-5">
                    <FaArrowLeft />
                </button>
                <div className="w-full flex flex-row gap-50 place-content-center">
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