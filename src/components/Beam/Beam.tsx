import { useEffect, useRef } from "react";
import "./Beam.css"

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
        <div ref={beamRef} className="beam bg-neutral-500 absolute top-0 left-1/2 w-full h-50 md:h-70 lg:h-80 pointer-events-none text-3xl">
            <div className="flex flex-row place-content-between blur-[1px] md:blur-[2px] h-full items-center text-9xl p-5">
            </div>
        </div>
    );
};

export default Beam;
