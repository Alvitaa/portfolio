import { useTranslation } from "react-i18next";
import { RiEmotionHappyLine } from "react-icons/ri";

function About() {
    const {t} = useTranslation("home");

    return <section id="about" className="min-h-screen p-5 pt-15 flex flex-1 flex-row place-content-center items-center">
        <div className="bg-main flex flex-col place-content-between gap-5 p-5 text-white shadow-l min-h-[75vh] min-w-[50vw] max-w-[60vw]">
            <h3 className="w-full text-5xl font-bold border-b pb-5 flex flex-row items-center place-content-between">{t("about.title")}
                <RiEmotionHappyLine />
            </h3>
            <div className="flex flex-col gap-4">
                <p className="text-lg">
                    {t("about.text.0")}
                </p>
                <p className="text-lg">
                    {t("about.text.1")}
                </p>
                <p className="text-lg">
                    {t("about.text.2")}
                </p>
            </div>
            <p className="border-t pt-5 text-right">{t("about.signature", {name: "Juan Alva"})}</p>
        </div>
    </section>
}

export default About;