import Poster from "./Poster";

const projects = [
    { id: "01", title: "Datos que hablan", subtitle: "Dashboard analítico", color: "bg-blue-500" },
    { id: "02", title: "Contenido que conecta", subtitle: "Blog técnico", color: "bg-orange-500" },
    { id: "03", title: "Gestión simplificada", subtitle: "App financiera", color: "bg-purple-500" },
    { id: "04", title: "Compra sin barreras", subtitle: "E-commerce accesible", color: "bg-emerald-500" },
];

function ProjectsPreview() {
    return (
        <section id="projects" className="min-h-[90vh] pt-15 overflow-hidden flex flex-col gap-5 items-center place-content-center">
            <div className="w-full border-neutral-50 border-t border-b shadow-m">
                <div className="w-full h-5 bg-main"></div>
                <h3 className="text-3xl font-bold text-center p-5">Estación: Mis Proyectos</h3>
            </div>
            <div className="w-full min-h-[75vh] p-5 overflow-x-auto scroll-smooth snap-x snap-mandatory">
                <div className="flex gap-20 px-20">
                    {projects.map((project) => (
                        <Poster key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsPreview;