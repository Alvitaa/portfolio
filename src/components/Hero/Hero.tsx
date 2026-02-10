function Hero() {
    const steps = 15;

    return (
        <section id="hero" className="w-full flex flex-col">
            <div className="py-35 leading-10 text-center">
                <h3>Hola! Mi nombre es</h3>
                <h1 className="text-6xl font-bold leading-25">Juan José Alva Larios</h1>
                <p>Soy un desarrollador Frontend con experiencia en el desarrollo de aplicaciones Fullstack</p>
                <p>"Construyendo interfaces que conectan usuarios con sistemas."</p>
            </div>
            {Array.from({ length: steps}).map((_, index) => (
                <div key={index} className="w-full border-t-5 bg-gray-700 h-10"></div>
            ))

            }
        </section>
    )
}

/* h-[calc(100vh-2.5rem)] */

export default Hero