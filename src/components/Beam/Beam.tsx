import { useEffect, useRef } from "react";
import "./Beam.css"

const Beam: React.FC = () => {
    const beamRef = useRef<HTMLDivElement | null>(null);
    const bgRef = useRef<HTMLElement | null>(null);

    const lastScroll = useRef(0);
    const ticking = useRef(false);

    useEffect(() => {
        bgRef.current = document.querySelector(".background");

        const onScroll = () => {
            lastScroll.current = window.scrollY;

            if (!ticking.current) {
                requestAnimationFrame(() => {
                    if (!beamRef.current || !bgRef.current) return;

                    // Parallax effect
                    const parallaxSpeed = - 0.17;
                    const vigaOffset = lastScroll.current * parallaxSpeed;
                    beamRef.current.style.transform = `translateY(${vigaOffset}px)`;

                    // Blur effect
                    const rect = beamRef.current.getBoundingClientRect();
                    const beamCenter = rect.top + rect.height / 2;
                    const viewportCenter = window.innerHeight / 2;

                    const distance = Math.abs(beamCenter - viewportCenter);

                    const proximity = Math.max(0, 1 - distance / viewportCenter);

                    const intensity = Math.pow(proximity, 2);

                    const maxBlur = 12;
                    const blur = intensity * maxBlur;

                    bgRef.current.style.filter = `blur(${blur}px)`;

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

    return <div ref={beamRef} className="beam bg-gray-400 h-80 w-full" />;
};

export default Beam;
