import { useTranslation } from "react-i18next";
import CopyEmailButton from "./CopyEmailButton";
import { useState } from "react";
import CreditsModal from "./CreditsModal";
import Modal from "../Modal/Modal";
import { data } from "../../data/personal.data";

function Footer() {
    const { t } = useTranslation("home");
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    return (
        <>
            <footer className="bg-main text-white text-sm md:text-base p-5 flex flex-col place-content-between gap-10">
                <div className="flex flex-col py-3 md:py-5 gap-3 md:gap-5 border-l-3 pl-5 border-white">
                    <h3 className="text-2xl md:text-3xl font-semibold">{t("footer.tagline")}</h3>
                    <p>{t("footer.contact")}</p>
                    <ul className="flex flex-col gap-3 md:gap-5">
                        <li className="underline"><a href={data.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li className="underline"><a href={data.github} target="_blank" rel="noopener noreferrer">Github</a></li>
                        <li><CopyEmailButton user={data.user} domain={data.domain} /></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2 text-center font-semibold">
                    <p>{t("footer.madeBy", { name: "Juan Alva" })} - 2026</p>
                    <p>{t("footer.stack")}</p>
                    <p className="underline cursor-pointer" onClick={() => openModal()}>{t("footer.extra")}</p>
                </div>
            </footer>
            {isOpen &&
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <CreditsModal />
                </Modal>
            }
        </>
    );
}

export default Footer;