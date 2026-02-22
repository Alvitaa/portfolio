import { useTranslation } from "react-i18next";
import { RiEmotionHappyLine } from "react-icons/ri";

function About() {
    const {t} = useTranslation("home");

    return <section id="about" className="min-h-screen p-3 py-6 md:p-5 md:pt-15 flex flex-1 flex-row place-content-center items-center">
        <div className="bg-main flex flex-col place-content-between gap-3 md:gap-5 p-3 md:p-5 text-white shadow-l min-h-[75vh] min-w-[50vw] md:max-w-[60vw]">
            <h3 className="w-full text-2xl md:text-5xl font-bold border-b pb-3 md:pb-5 flex flex-row items-center place-content-between">
                {t("about.title")}
                <RiEmotionHappyLine />
            </h3>
            <div className="flex flex-col gap-4 text-sm md:text-lg">
                <p>{t("about.text.0")}</p>
                <p>{t("about.text.1")}</p>
                <p>{t("about.text.2")}</p>
            </div>
            <p className="border-t pt-3 md:pt-5 text-right text-sm md:text-lg">{t("about.signature", {name: "Juan Alva"})}</p>
        </div>
    </section>
}

export default About;