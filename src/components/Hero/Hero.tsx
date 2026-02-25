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
                className="relative bg-[url('/images/cloudy-sky.webp')] flex flex-row items-center -mt-10 py-25 pt-35 md:py-40 text-sm text-center bg-cover font-medium md:text-xl md:leading-10"
            >
                <div className="flex-1 p-2">
                    <h1 className="font-bold hidden md:inline md:leading-30 text-6xl lg:text-7xl">Juan José Alva Larios</h1>
                    <p className="text-5xl leading-15 font-bold md:hidden">Juan José</p>
                    <p className="text-5xl leading-15 pb-5 font-bold md:hidden">Alva Larios</p>
                    <p className="pt-2 px-6">{t("hero.profession")}</p>
                    <p className="font-bold italic px-2 pt-2">"{t("hero.tagline")}"</p>
                </div>
                <div className="absolute top-1/3 md:top-auto p-1 py-2 md:p-2 md:py-4 flex flex-col gap-2 md:gap-5 text-white rounded-l-xl text-2xl md:text-3xl right-0 bg-black/50 shadow-l">
                    <a className="pb-2 md:pb-5 border-b" href={data.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href={data.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    {/* <IoNewspaper onClick={() => openModal()}/> */}
                </div>
            </div>
            <div className="bg-[url('/images/stairs.png')] bg-cover bg-center -translate-y-[22%] h-screen w-full"/>
            {isOpen &&
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <NewsModal />
                </Modal>
            }
        </section>
    )
}

export default Hero