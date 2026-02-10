import { useEffect, useRef } from "react";
import "./Beam.css"
import OwLogo from "../../assets/icons/ow_logo.svg";
import ViteLogo from "../../assets/icons/vite.svg";
import Graffiti from "../../assets/icons/JJAL_graffiti.svg";
import { VscVscode } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Beam: React.FC = () => {
    const beamRef = useRef<HTMLDivElement | null>(null);

    const lastScroll = useRef(0);
    const ticking = useRef(false);

    useEffect(() => {

        const onScroll = () => {
            lastScroll.current = window.scrollY;

            if (!ticking.current) {
                requestAnimationFrame(() => {
                    if (!beamRef.current) return;

                    // Parallax effect
                    const parallaxSpeed = - 0.17;
                    const beamOffset = lastScroll.current * parallaxSpeed;
                    beamRef.current.style.transform = `translateY(${beamOffset}px)`;

                    ticking.current = false;
                });

                ticking.current = true;
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <div ref={beamRef} className="beam bg-neutral-400 absolute w-full h-80 pointer-events-none text-3xl">
            <div className="flex flex-row place-content-between blur-[2px] h-full items-center text-9xl p-5">
                <div className="relative h-full">
                    <img src={Graffiti} className="h-40 relative top-10 left-5 rotate-5" />
                    <img src={OwLogo} className="h-30 absolute top-30 left-60 -rotate-12" />
                </div>
                <div className="relative h-full">
                    <FaReact className="text-cyan-400 absolute top-8 right-62 text-9xl -rotate-12" />
                    <VscVscode className="text-blue-600 absolute top-35 right-40 text-9xl rotate-8" />
                    <img src={ViteLogo} className="h-28 relative top-0 right-30 text-9xl rotate-10" />
                    <RiTailwindCssFill className="text-cyan-300 absolute top-20 right-0 text-9xl rotate-12" />
                </div>
            </div>
        </div>
    );
};

export default Beam;
