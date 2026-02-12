import { useContext } from "react";
import Backgound from "../../assets/images/cloudy-sky.webp";
import { LanguageContext } from "../../i18n/LanguageContext";

function Hero() {
    const {t} = useContext(LanguageContext);
    const steps = 12;

    return (
        <section id="hero" className="w-full flex flex-col">
            <div className="-mt-10 py-45 leading-10 text-center bg-cover" style={{backgroundImage: `url(${Backgound})`}}>
                <h3>{t("presentation")}</h3>
                <h1 className="text-6xl font-bold leading-25">Juan José Alva Larios</h1>
                <p>{t("profession")}</p>
                <p>"{t("tagline")}"</p>
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