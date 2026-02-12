import { useEffect, useState } from "react";
import Peru from "../../assets/icons/Peru";
import Clock from "./Clock";
import { href, Link, useLocation } from "react-router-dom";

function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 900);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav id="nav" className={`${isHome ? "sticky" : "relative"} top-0 w-full gap-4 h-10 z-10 font-bold border-b flex place-content-end items-center shadow ${isScrolled || !isHome ? "bg-white" : "bg-transparent"}`}>
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-row place-content-center gap-10 flex-1">
                {location.pathname === "/" ?
                    <>
                        <a href="#hero">inicio</a>
                        <a href="#about">sobre mi</a>
                        <a href="#projects">proyectos</a>
                    </>
                    :
                    <>
                        <Link to={href("/#hero")}>inicio</Link>
                        <Link to={href("/#about")}>sobre mi</Link>
                        <Link to={href("/#projects")}>proyectos</Link>
                    </>
                }
            </div>
            <div className="flex flex-row gap-2 items-center pr-3">
                <Clock />
                <div className="border-3">
                    <Peru />
                </div>
                <span className="font-bold">PE</span>
            </div>
            <div className={`w-1/12 border-l text-black h-full py-2 text-center ${isScrolled || !isHome ? "bg-main text-white" : "bg-transparent"}`}>
                <h3>EN | <u>ES</u></h3>
            </div>
        </nav>
    )
}

export default Nav