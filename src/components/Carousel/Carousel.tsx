import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import type { Project } from "../../models/types";
import Poster from "../Projects/Poster";

interface Props {
    projects: Project[]
}

function Carousel({ projects }: Props) {
    const [isAnimating, setIsAnimating] = useState(false);
    const visible = 2;
    const [index, setIndex] = useState(visible);
    const [transition, setTransition] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);

    const extended = [
        ...projects.slice(-visible),
        ...projects,
        ...projects.slice(0, visible + 1),
    ];

    const slideWidth = 60;

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setIndex((prev) => prev + 1);
    };

    const handlePrevious = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setIndex((prev) => prev - 1);
    };

    // Manejo del salto invisible
    useEffect(() => {
        const handleTransitionEnd = () => {
            setIsAnimating(false);

            if (index >= projects.length + visible) {
                setTransition(false);
                setIndex(visible);
            }

            if (index <= visible - 1) {
                setTransition(false);
                setIndex(projects.length + visible - 1);
            }
        };

        const node = containerRef.current;
        node?.addEventListener("transitionend", handleTransitionEnd);

        return () => {
            node?.removeEventListener("transitionend", handleTransitionEnd);
        };
    }, [index, projects.length, visible]);

    useEffect(() => {
        if (!transition) {
            requestAnimationFrame(() => {
                setTransition(true);
            });
        }
    }, [transition]);

    return (
        <div className="w-full flex items-center gap-4 overflow-hidden">
            <button onClick={handlePrevious} className="absolute left-20 bg-white rounded-full p-2 shadow-s font-bold text-2xl z-5">
                <FaArrowLeft />
            </button>

            <div className="overflow-clip p-10 w-full">
                <div
                    ref={containerRef}
                    className={`flex ${transition ? "transition-transform duration-500" : ""}`}
                    style={{
                        transform: `translateX(calc(-${index * slideWidth}% + ${(100 - slideWidth) / 2}%))`,
                    }}
                >
                    {extended.map((project, i) => (
                        <div
                            key={i}
                            className="px-20 shrink-0"
                            style={{ width: `${slideWidth}%` }}
                        >
                            <Poster project={project} />
                        </div>
                    ))}
                </div>
            </div>

            <button onClick={handleNext} className="absolute right-20 bg-white rounded-full p-2 shadow-s font-bold text-2xl z-5">
                <FaArrowRight />
            </button>
        </div>
    );
}


export default Carousel;