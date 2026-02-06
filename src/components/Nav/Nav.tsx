import { useEffect, useState } from "react"

function Clock() {
    const [time, setTime] = useState("00:00:00");

    useEffect(() => {
        setInterval(() => {
            const date = new Date()
            const offset = date.getTimezoneOffset();

            const hour = date.getHours() + (offset / 60) - 5;
            const minute = date.getMinutes()
            const second = date.getSeconds()


            const currentTime = hour + ':' + minute + ':' + second
            setTime(currentTime)
        }, 1000)
    }, [])

    return <div className="font-bold">{time} PE</div>
}

function Nav() {
    return (
        <nav className="w-full h-10 font-bold border-b-1 flex place-content-around items-center">
            <a href="#hero">inicio</a>
            <a href="#about">sobre mi</a>
            <a href="#projects">proyectos</a>
            <a href="#skills">habilidades</a>
            <Clock />
            <div className="bg-main text-white px-8 py-2">
                <h3>EN | ES</h3>
            </div>
        </nav>
    )
}

export default Nav