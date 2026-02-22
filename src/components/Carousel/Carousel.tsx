import { useCallback, useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import type { Project } from "../../models/types";
import Poster from "../Projects/Poster";
import useResponsiveSlideWidth from "./useResponsiveSlideWidth";

interface Props {
    projects: Project[],
    doInterval: boolean
}

function Carousel({ projects, doInterval }: Props) {
    const [isAnimating, setIsAnimating] = useState(false);
    const visible = 2;
    const [index, setIndex] = useState(visible);
    const [transition, setTransition] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const slideWidth = useResponsiveSlideWidth();

    const extended = [
        ...projects.slice(-visible),
        ...projects,
        ...projects.slice(0, visible + 1),
    ];

    function handleNext() {
        if (isAnimating) return;
        setIsAnimating(true);
        setIndex((prev) => prev + 1);
    };

    function handlePrevious() {
        if (isAnimating) return;
        setIsAnimating(true);
        setIndex((prev) => prev - 1);
    };

    const goNext = useCallback(() => {
        setIndex((prev) => prev + 1);
    }, []);

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

    useEffect(() => {
        if (!doInterval) return;
        const interval = setInterval(() => {
            goNext();
        }, 15000);

        return () => clearInterval(interval);
    }, [doInterval, isAnimating, goNext]);

    useEffect(() => {
        setTransition(false);
        setIndex((prev) => prev);
        requestAnimationFrame(() => setTransition(true));
    }, [slideWidth]);

    return (
        <div className="w-full flex items-center gap-4 h-fit">
            <button onClick={handlePrevious} className="absolute left-2 md:left-5 lg:left-20 bg-white rounded-full p-2 shadow-s font-bold text-2xl z-5">
                <FaArrowLeft />
            </button>

            <div className="overflow-clip pt-5 md:py-5 xl:p-10 w-full h-full">
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
                            className="px-5 md:px-5 lg:px-10 xl:px-20 shrink-0"
                            style={{ width: `${slideWidth}%` }}
                        >
                            <Poster project={project} />
                        </div>
                    ))}
                </div>
            </div>

            <button onClick={handleNext} className="absolute right-2 md:right-5 lg:right-20 bg-white rounded-full p-2 shadow-s font-bold text-2xl z-5">
                <FaArrowRight />
            </button>
        </div>
    );
}


export default Carousel;