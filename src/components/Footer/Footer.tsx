import { useTranslation } from "react-i18next";
import CopyEmailButton from "./CopyEmailButton";
import { useState } from "react";
import CreditsModal from "./CreditsModal";
import Modal from "../Modal/Modal";

function Footer() {
    const { t } = useTranslation("home");
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    return (
        <>
            <footer className="bg-main text-white text-md p-5 flex flex-col place-content-between gap-10">
                <div className="border-l-3 pl-5 border-white leading-10">
                    <h3 className="text-3xl font-semibold">{t("footer.tagline")}</h3>
                    <p>{t("footer.contact")}</p>
                    <ul>
                        <li className="underline"><a href="https://www.linkedin.com/in/jalvalarios/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li className="underline"><a href="https://github.com/Alvitaa" target="_blank" rel="noopener noreferrer">Github</a></li>
                        <li><CopyEmailButton user="jalvalarios" domain="gmail.com" /></li>
                    </ul>
                </div>
                <div className="text-center font-semibold">
                    <p>{t("footer.madeBy", { name: "Juan Alva" })} - 2026</p>
                    <p>{t("footer.stack")}</p>
                    <p className="underline cursor-pointer" onClick={() => openModal()}>{t("footer.extra")}</p>
                </div>
            </footer>
            {isOpen &&
                <Modal onClose={() => setIsOpen(false)}>
                    <CreditsModal />
                </Modal>
            }
        </>
    );
}

export default Footer;