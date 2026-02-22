import { useTranslation } from "react-i18next";
import { FaWalking } from "react-icons/fa";
import { RiProhibitedLine } from "react-icons/ri";

function PreFooter() {
    const { t } = useTranslation("home");

    return (
        <div className="w-full cursor-default">
            <div className="w-full h-3 md:h-5 bg-yellow-500" />
            <div className="w-full bg-neutral-700 flex flex-row place-content-center p-5 pb-10">
                <div className="bg-neutral-200 font-extrabold text-sm md:text-lg flex items-center gap-2 p-3">
                    <div className="relative w-9 h-9">
                        <FaWalking className="absolute inset-0 m-auto text-2xl text-black" />
                        <RiProhibitedLine className="absolute inset-0 m-auto text-4xl text-red-600" />
                    </div>
                    <p className="flex-1">{t("footer.warning.title").toLocaleUpperCase()}</p>
                </div>
                <div className="bg-red-700 text-white p-2 text-xs min-w-30 max-w-30">
                    <p>{t("footer.warning.warning")}</p>
                    <p>{t("footer.warning.description")}</p>
                </div>
            </div>
            <div className="w-full h-3 bg-linear-179 from-neutral-500 via-neutral-700 to-neutral-800 shadow-lg border border-neutral-600" />
            <div className="relative bg-[url('/images/gravel.webp')] w-full h-35 md:h-70 bg-cover">
                <div className="absolute w-full h-full inset-0 bg-linear-to-b from-black/30 from-20% via-main/50 via-75% to-main"></div>
            </div>
        </div>
    );
}

export default PreFooter;