import { useEffect, useRef } from "react";
import "./Beam.css"

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
        <div ref={beamRef} className="beam bg-neutral-400 absolute w-full h-80 pointer-events-none backdrop-blur-lg" />
    );
};

export default Beam;
