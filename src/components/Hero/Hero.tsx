import { useTranslation } from "react-i18next";

function Hero() {
    const {t} = useTranslation("home");
    const steps = 12;

    return (
        <section id="hero" className="w-full flex flex-col">
            <div className="bg-[url('/images/cloudy-sky.webp')] -mt-10 py-40 leading-12 text-center bg-cover text-2xl font-medium">
                <h3 className="">{t("hero.presentation")}</h3>
                <h1 className="text-8xl font-bold leading-30">Juan José Alva Larios</h1>
                <p>{t("hero.profession")}</p>
                <p>"{t("hero.tagline")}"</p>
            </div>
            {Array.from({ length: steps}).map((_, index) => (
                <div key={index} className="w-full border-t-5 bg-gray-700 h-10"></div>
            ))

            }
        </section>
    )
}

export default Hero