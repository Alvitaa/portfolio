import { useTranslation } from "react-i18next";

function NewsModal() {
    const { t } = useTranslation("news");
    return (
        <>
            <div className="bg-neutral-200 w-1/2 h-1/2 rounded-xl text-center z-1">
                <h1 className="bg-main text-white rounded-t-xl p-3 text-3xl font-bold leading-15">
                    {t("title")}
                </h1>
                <div className="overflow-auto p-5">
                    Aquí van las noticias...
                </div>
            </div>
        </>
    );
}

export default NewsModal;