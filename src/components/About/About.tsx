function About() {
    return <section className="min-h-[85vh] flex flex-row items-center place-content-center">
        <div className="bg-main flex flex-col place-content-between gap-5 p-5 text-white shadow-2xl min-h-[75vh] min-w-[50vw] max-w-[60vw]">
            <h3 className="text-5xl font-bold border-b pb-5">Sobre mi</h3>
            <div className="flex flex-col gap-3">
                <p className="text-lg">
                    Desde siempre me ha gustado el software y entender el cómo funcionan diversos sistemas detrás de las cosas que usamos a diario, lo que llevó a formarme como bachiller en Ingeniería de Sistemas.
                </p>
                <p className="text-lg">
                    Actualmente busco desarrollarme profesionalmente como frontend, fortaleciendo mis habilidades técnicas y ganando experiencia participando en proyectos de impacto.
                </p>
                <p className="text-lg">
                    Este portafolio está inspirado en los sistemas de líneas de trenes y sus estaciones, que me resultan fascinantes por su lógica, organización y eficiencia, cualidades que considero fundamentales en el desarrollo de buen software.
                </p>
            </div>
            <p className="border-t pt-5">Escrito por: Juan Alva - Desarrollador de Software</p>
        </div>
    </section>
}

export default About;