interface Props {
    project: {
        id: string;
        title: string;
        color: string;
        subtitle: string;
    },
    onClick: () => void,
}

function Poster({ project, onClick }: Props) {
    return (
        <div
            className="min-w-2/3 max-w-2/3 h-[60vh] p-5 border-5 hover:scale-105 duration-300"
            onClick={() => onClick()}
        >
            <div className={`h-56 ${project.color}`} />

            <div className="space-y-3">
                <p className="text-xs tracking-widest text-neutral-500">
                    PROYECTO {project.id}
                </p>

                <h3 className="text-2xl font-semibold text-neutral-900">
                    {project.title}
                </h3>

                <p className="text-sm text-neutral-600">
                    {project.subtitle}
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