import { useContext, useEffect, useState } from "react";
import Peru from "../../assets/icons/Peru";
import Clock from "./Clock";
import { href, Link, useLocation } from "react-router-dom";
import { LanguageContext } from "../../i18n/LanguageContext";

function Nav() {
    const { t, setLanguage, language } = useContext(LanguageContext);
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

    function toggleLanguage() {
        if (language === "en") {
            setLanguage("es")
        } else {
            setLanguage("en")
        }
    }

    return (
        <nav id="nav" className={`${isHome ? "sticky" : "relative"} top-0 w-full gap-4 h-10 z-10 font-bold border-b flex place-content-end items-center shadow ${isScrolled || !isHome ? "bg-white" : "bg-transparent"}`}>
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-row place-content-center gap-10 flex-1">
                {location.pathname === "/" ?
                    <>
                        <a href="#hero">{t("hero")}</a>
                        <a href="#about">{t("about")}</a>
                        <a href="#projects">{t("projects")}</a>
                    </>
                    :
                    <>
                        <Link to={href("/#hero")}>{t("hero")}</Link>
                        <Link to={href("/#about")}>{t("about")}</Link>
                        <Link to={href("/#projects")}>{t("projects")}</Link>
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
            <div
                className={`flex flex-row place-content-center cursor-pointer gap-2 w-1/12 border-l text-black h-full py-2 text-center ${isScrolled || !isHome ? "bg-main text-white" : "bg-transparent"}`}
                onClick={() => toggleLanguage()}
            >
                <h3 className={language==="en"?"underline":""}>EN </h3>|<h3 className={language==="es"?"underline":""}> ES</h3>
            </div>
        </nav>
    )
}

export default Nav