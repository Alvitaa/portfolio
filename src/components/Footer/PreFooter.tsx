function PreFooter() {
    return (
        <div className="w-full">
            <div className="w-full h-5 bg-yellow-500" />
            <div className="w-full h-45 bg-neutral-700" />
            <div className="w-full h-8 bg-linear-178 from-neutral-500 via-neutral-700 to-neutral-800 shadow-lg border border-neutral-600"/>
            <div className="relative bg-[url('/images/gravel.webp')] w-full h-70 bg-cover">
                <div className="absolute w-full h-full inset-0 bg-linear-to-b from-black/30 via-black/70 to-black to-95%"></div>
            </div>
        </div>
    );
}

export default PreFooter;