import { useTranslation } from "react-i18next";
import Announcement from "../Announcement/Announcement";
import TechStack from "../Announcement/TechStack";
import SectionTitle from "../Section Title/SectionTitle";

function Skills() {
    const { t } = useTranslation("home");

    return (
        <section id="skills" className="flex flex-col gap-5 pt-15 py-5 w-full min-h-screen">
            <Announcement />
            <SectionTitle>
                <p className="flex items-center justify-center rounded-md border-3 text-sm md:text-base px-1.5 pr-2 md:px-2 md:pr-2.5 font-black">1</p>
                {t("skills.title")}
            </SectionTitle>
            <TechStack />
        </section>
    )
}

export default Skills;