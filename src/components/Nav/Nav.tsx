import { useEffect, useState } from "react";
import Peru from "../../assets/icons/Peru";
import Clock from "./Clock";
import { useTranslation } from "react-i18next";
import { FaTrainSubway } from "react-icons/fa6";

function Nav() {
    const { t, i18n } = useTranslation("home");
    const [isScrolled, setIsScrolled] = useState(false);
    const isHome = location.pathname === "/portfolio/" || location.pathname === "/portfolio";

    useEffect(() => {
        const hero = document.getElementById("hero");
        const heroHeight = hero?.offsetHeight;
        const handleScroll = () => {
            const scrollHeight = heroHeight != null ? heroHeight - (heroHeight / 8) - 100 : 1000;
            setIsScrolled(window.scrollY > scrollHeight);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function toggleLanguage() {
        if (i18n.language === "en") {
            i18n.changeLanguage("es");
        } else {
            i18n.changeLanguage("en");
        }
    }

    return (
        <nav id="nav" className={`${isHome ? "sticky" : "relative"} top-0 w-full gap-4 h-10 z-10 font-bold border-b flex place-content-end items-center shadow ${isScrolled || !isHome ? "bg-white" : "bg-transparent backdrop-blur-md"}`}>
            <FaTrainSubway className="text-xl absolute left-5" title={t("nav.love")} />
            <div className="absolute left-1/2 -translate-x-1/2 hidden gap-10 flex-1 md:flex md:flex-row md:place-content-center">
                <a href="#hero">{t("nav.hero")}</a>
                <a href="#about">{t("nav.about")}</a>
                <a href="#projects">{t("nav.projects")}</a>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <Clock />
                <div className="border-3">
                    <Peru />
                </div>
                <span className="font-bold">PE</span>
            </div>
            <div
                className={`flex flex-row place-content-center cursor-pointer gap-2 w-fit border-l text-black h-full px-4 py-2 text-center ${isScrolled || !isHome ? "bg-main text-white" : "bg-transparent"}`}
                onClick={() => toggleLanguage()}
                title={t("nav.language")}
            >
                <h3 className={i18n.language === "en" ? "underline" : "font-medium"}>EN </h3>|<h3 className={i18n.language === "es" ? "underline" : "font-medium"}> ES</h3>
            </div>
        </nav>
    )
}

export default Nav