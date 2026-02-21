import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";
import { data } from "../../data/personal.data";
import { useState } from "react";
import NewsModal from "./NewsModal";
import Modal from "../Modal/Modal";

function Hero() {
    const { t } = useTranslation("home");
    const [isOpen, setIsOpen] = useState(false);
    const steps = 12;

    function openModal () {
        setIsOpen(true);
    }

    return (
        <section id="hero" className="w-full flex flex-col">
            <div
                className="relative bg-[url('/images/cloudy-sky.webp')] flex flex-row items-center -mt-10 py-40 leading-12 text-center bg-cover text-2xl font-medium"
            >
                <div className="flex-1">
                    <h3 className="">{t("hero.presentation")}</h3>
                    <h1 className="text-8xl font-bold leading-30">Juan José Alva Larios</h1>
                    <p>{t("hero.profession")}</p>
                    <p>"{t("hero.tagline")}"</p>
                </div>
                <div className="absolute p-2 py-4 flex flex-col gap-5 text-white rounded-l-xl text-3xl right-0 bg-black/50 shadow-l">
                    <a className="pb-5 border-b" href={data.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href={data.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    {/* <IoNewspaper onClick={() => openModal()}/> */}
                </div>
            </div>
            {Array.from({ length: steps }).map((_, index) => (
                <div key={index} className="w-full border-t-5 bg-gray-700 h-10"></div>
            ))}
            {isOpen &&
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <NewsModal />
                </Modal>
            }
        </section>
    )
}

export default Hero