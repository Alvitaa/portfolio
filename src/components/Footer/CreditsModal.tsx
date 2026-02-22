import { useTranslation } from "react-i18next";

function CreditsModal() {
    const {t} = useTranslation("credits");

    return (
        <div className="bg-neutral-200 md:w-1/2 rounded-xl text-center z-1">
            <h1 className="bg-main text-white rounded-t-xl md:p-3 text-xl md:text-3xl font-bold leading-15">
                {t("title")}
            </h1>
            <div className="text-sm md:text-base p-2 py-5 md:p-5">
                <p>{t("developer")} - Juan Alva</p>
                <h3 className="text-sm md:text-2xl font-bold leading-12 md:leading-15">{t("fonts")}</h3>
                <p>Inter - <a className="underline" href="https://rsms.me/inter/">Rasmus Andersson</a></p>
                <h3 className="text-sm md:text-2xl font-bold leading-12 md:leading-15">{t("images.title")}</h3>
                <p>{t("images.sky")} - <a className="underline" href="https://www.pexels.com/es-es/foto/casa-pintoresca-frente-al-mar-con-exuberante-vegetacion-32918344/">Dr. Mohammad</a></p>
                <p>{t("images.stair")} - Juan Alva</p>
                <p>{t("images.gravel")} - <a className="underline" href="https://www.freepik.com/free-photo/vertical-closeup-small-stones-sunlight-nice-picture-backgrounds-wallpapers_10835353.htm#fromView=keyword&page=1&position=10&uuid=e5f03266-8480-4d25-b1cb-eba094fb5fb0&query=Stone+gravel+texture">Wirestock</a> </p>
                <p>{t("images.peru")} - <a className="underline" href="https://en.wikipedia.org/wiki/File:Flag_of_Peru.svg">Wikipedia</a></p>
                <p>{t("images.ow")} - <a className="underline" href="https://overwatch.blizzard.com/">Blizzard Entertainment</a></p>
                <h3 className="text-sm md:text-2xl font-bold leading-12 md:leading-15">{t("additional")}</h3>
                <p>React Icons</p>
            </div>
        </div>
    );
}

export default CreditsModal;