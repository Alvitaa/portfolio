import { useState } from "react";
import Poster from "./Poster";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const projects = [
    { id: "01", title: "Datos que hablan", subtitle: "Dashboard analítico", color: "bg-blue-500" },
    { id: "02", title: "Contenido que conecta", subtitle: "Blog técnico", color: "bg-orange-500" },
    { id: "03", title: "Gestión simplificada", subtitle: "App financiera", color: "bg-purple-500" },
    { id: "04", title: "Compra sin barreras", subtitle: "E-commerce accesible", color: "bg-emerald-500" },
];

function ProjectsPreview() {
    const [index, setIndex] = useState(0);

    function handleNext() {
        setIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    function handlePrevious() {
        setIndex(
            (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
        );
    };

    function getVisibleProjects() {
        const prevIndex = (index - 1 + projects.length) % projects.length;
        const nextIndex = (index + 1) % projects.length;

        return [
            { project: projects[prevIndex], realIndex: prevIndex },
            { project: projects[index], realIndex: index },
            { project: projects[nextIndex], realIndex: nextIndex }
        ];
    }

    function handleClick(index: number) {
        setIndex(index);
        console.log(index);
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
                <div className="flex gap-20 place-content-center items-center">
                    {visibleProjects.map(({project, realIndex}, index) => (
                        <Poster key={index} project={project} onClick={() => handleClick(realIndex)} />
                    ))}
                </div>
                <button onClick={handleNext} className="absolute right-20 bg-white rounded-full p-2 shadow-s font-bold text-2xl z-5">
                    <FaArrowRight />
                </button>
            </div>
        </section>
    );
}

export default ProjectsPreview;