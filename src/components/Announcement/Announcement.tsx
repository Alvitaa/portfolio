import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Announcement() {
    const { t } = useTranslation("announcements");
    const facts = t("facts", { returnObjects: true }) as string[];
    const [index, setIndex] = useState(12);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);

            setTimeout(() => {
                setIndex((prev) => {
                    let newIndex;
                    do {
                        newIndex = Math.floor(Math.random() * facts.length);
                    } while (newIndex === prev);
                    return newIndex;
                });

                setFade(true);
            }, 500);
        }, 15000);

        return () => clearInterval(interval);
    }, [facts.length])

    return (
        <div className="w-full flex items-center place-content-center p-10 bg-main text-white text-md">
            <p className= {`flex items-center text-center h-12 font-medium transition-opacity duration-500 ${ fade ? "opacity-100" : "opacity-0"}`}>{t(`facts.${index}`)}</p>
        </div>
    )
}

export default Announcement;