import { useTranslation } from "react-i18next";

function About() {
    const {t} = useTranslation("home");

    return <section className="min-h-[85vh] flex flex-row items-center place-content-center">
        <div className="bg-main flex flex-col place-content-between gap-5 p-5 text-white shadow-2xl min-h-[75vh] min-w-[50vw] max-w-[60vw]">
            <h3 className="text-5xl font-bold border-b pb-5">{t("about.title")}</h3>
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