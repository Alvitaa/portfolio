import { useEffect, useState } from "react";
import Peru from "../../assets/icons/Peru";
import Clock from "./Clock";

function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 900);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`sticky top-0 w-full gap-4 h-10 z-10 font-bold border-b flex place-content-end items-center shadow ${isScrolled ? "bg-white" : "bg-transparent"}`}>
            <div className="flex flex-row place-content-evenly flex-1">
                <a href="#hero">inicio</a>
                <a href="#about">sobre mi</a>
                <a href="#projects">proyectos</a>
                <a href="#skills">habilidades</a>
            </div>
            <div className="flex flex-row gap-2 items-center pr-3">
                <Clock />
                <div className="border-3">
                    <Peru />
                </div>
                <span className="font-bold">PE</span>
            </div>
            <div className={`w-1/12 border-l text-black h-full py-2 text-center ${isScrolled ? "bg-main text-white" : "bg-transparent"}`}>
                <h3>EN | <u>ES</u></h3>
            </div>
        </nav>
    )
}

export default Nav