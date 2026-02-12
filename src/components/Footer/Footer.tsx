function Footer () {
    return <footer className="bg-black text-white text-md p-5 flex flex-col place-content-between gap-10">
        <div className="border-l-3 pl-5 border-white leading-10">
            <h3 className="text-3xl font-semibold">Tristemente, este es el final :(</h3>
            <p>Pero puedes chequear mis redes sociales, puedes enviarme un mensaje si quieres contactarme!</p>
            <ul>
                <li className="underline"><a href="https://www.linkedin.com/in/jalvalarios/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li className="underline"><a href="https://github.com/Alvitaa" target="_blank" rel="noopener noreferrer">Github</a></li>
                <li className="underline">Email</li>
            </ul>
        </div>
        <div className="text-center font-semibold">
            <p>Hecho por Juan Alva - 2026</p>
            <p>Este sitio web utiliza React + Vite y Tailwind CSS</p>
        </div>
    </footer>
}

export default Footer;