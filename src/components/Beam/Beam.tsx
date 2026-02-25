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
            const hero = document.getElementById("hero");
            const stairs = document.getElementById("stairs");
            const nav = document.getElementById("nav");
            lastScroll.current = window.scrollY;

            if (!ticking.current) {
                requestAnimationFrame(() => {
                    if (!beamRef.current || !hero || !stairs) return;

                    const beamHeight = beamRef.current.offsetHeight;
                    const heroHeight = hero.offsetHeight;
                    const trueHeroHeight = heroHeight - heroHeight / 8;
                    const navHeight = nav ? nav.offsetHeight : 0;

                    const triggerPoint = stairs.offsetTop - stairs.offsetHeight / 8 - navHeight;

                    const scrollAfterTrigger = Math.max(scrollY - triggerPoint, 0);

                    const maxScroll = trueHeroHeight + navHeight - beamHeight;
                    const clampedScroll = Math.min(scrollAfterTrigger, maxScroll);

                    const progress = Math.min(clampedScroll / maxScroll, 1);

                    const startY = trueHeroHeight;
                    const endY = trueHeroHeight + navHeight - beamHeight;

                    const currentY =
                        startY + (endY - startY) * progress;

                    beamRef.current.style.transform =
                        `translate(-50%, ${currentY}px)`;

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
        <div ref={beamRef} className="beam bg-neutral-400 absolute top-0 left-1/2 w-full h-50 md:h-70 lg:h-80 pointer-events-none text-3xl">
            <div className="flex flex-row place-content-between blur-[1px] md:blur-[2px] h-full items-center text-9xl p-5">
                <div className="relative h-full w-1/2">
                    <img src={Graffiti} className="absolute top-1/6 md:left-5 rotate-5 h-12 md:h-24 lg:h-32" />
                    <img src={OwLogo} className="absolute top-1/2 left-15 md:left-40 h-12 md:h-20 lg:h-24 -rotate-12" />
                </div>
                <div className="relative h-full w-1/2">
                    <FaReact className="text-cyan-400 absolute top-1/5 right-0 text-5xl md:text-8xl lg:text-9xl -rotate-12" />
                    <VscVscode className="text-blue-600 absolute bottom-0 right-2/11 md:right-3/13 text-5xl md:text-8xl lg:text-9xl rotate-8" />
                    <img src={ViteLogo} className="absolute top-0 right-3/9 md:right-4/15 h-12 md:h-22 lg:h-28 rotate-10" />
                    <RiTailwindCssFill className="text-cyan-300 absolute top-4/11 md:top-4/13 right-7/12 md:right-6/12 text-5xl md:text-8xl lg:text-9xl rotate-12" />
                </div>
            </div>
        </div>
    );
};

export default Beam;
