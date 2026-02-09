import { useEffect, useMemo, useState } from "react";
import Peru from "../../assets/icons/Peru";

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => { setDate(new Date()) }, 1000);
        return () => clearInterval(timerID);
    }, []);

    const timeString = useMemo(() => date.toLocaleTimeString("en-US", {
        timeZone: "America/Lima", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false
    }), [date]);

    return <span className="w-18 text-right font-bold">{timeString}</span>;
};

function Nav() {
    return (
        <nav className="w-full gap-4 h-10 font-bold border-b flex place-content-between items-center">
            <div className="flex flex-row place-content-evenly flex-1">
                <a href="#hero">inicio</a>
                <a href="#about">sobre mi</a>
                <a href="#projects">proyectos</a>
                <a href="#skills">habilidades</a>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <Clock />
                <div className="border-3">
                    <Peru />
                </div>
                <span className="font-bold">PE</span>
            </div>
            <div className="w-1/9 bg-main text-white h-full py-2 text-center">
                <h3>EN | ES</h3>
            </div>
        </nav>
    )
}

export default Nav