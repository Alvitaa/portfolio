import { useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ImageModalProps {
    images: string[];
    currentIndex: number;
    onNext: () => void;
    onPrev: () => void;
}

export default function ImageModal({
    images,
    currentIndex,
    onNext,
    onPrev,
}: ImageModalProps) {

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") onNext();
            if (e.key === "ArrowLeft") onPrev();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [onNext, onPrev]);

    return (
        <div className="relative flex flex-col place-content-around gap-2 w-full z-10">
            <img
                src={images[currentIndex]}
                alt="Project preview"
                className="w-full max-h-[80vh] w-full object-contain"
            />
            {images.length > 1 && (
                <div className="flex gap-2 w-full">
                    <button
                        onClick={onPrev}
                        className="flex-1 flex place-content-center bg-neutral-200 text-xl p-1 md:text-3xl cursor-pointer hover:bg-neutral-300"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={onNext}
                        className="flex-1 flex place-content-center bg-neutral-200 text-xl p-1 md:text-3xl cursor-pointer hover:bg-neutral-300"
                    >
                        <FaChevronRight />
                    </button>

                </div>
            )}
        </div>
    );
}
