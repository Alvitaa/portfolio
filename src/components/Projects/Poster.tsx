import type { Project } from "../../models/types";

interface Props {
    project: Project;
}

function Poster({ project }: Props) {
    return (
        <div
            className="flex flex-col min-w-2/5 max-w-2/5 h-[50vh] p-5 border-5 hover:scale-105 duration-300"
        >
            <div className={`flex-1 ${project.color}`} />

            <div className="space-y-3">
                <p className="text-xs tracking-widest text-neutral-500">
                    PROYECTO {project.id}
                </p>

                <h3 className="text-2xl font-semibold text-neutral-900">
                    {project.hook}
                </h3>

                <p className="text-sm text-neutral-600">
                    {project.title}
                </p>
            </div>

            <div className="flex justify-between text-sm font-medium">
                <span className="text-neutral-500">React · Tailwind</span>
                <span className="underline">Ver más</span>
            </div>
        </div>
    );
}

export default Poster;