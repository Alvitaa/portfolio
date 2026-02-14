function Poster({ project }) {
    return (
        <div className="snap-center
        shrink-0
        w-full min-h-[70vh]
        bg-white
        border-5
        shadow-l
        duration-300
        hover:scale-[1.03]
        hover:-translate-y-2
        cursor-pointer
        flex
        flex-col
        justify-between
        p-6">
            <div className={`h-2/3 rounded-md ${project.color}`} />
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

            <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-neutral-500">React · Tailwind</span>
                <button className="text-neutral-900 underline">
                    Ver más
                </button>
            </div>
        </div>
    );
}

export default Poster;