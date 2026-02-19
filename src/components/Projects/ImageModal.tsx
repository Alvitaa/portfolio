import { useEffect } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ImageModalProps {
    images: string[];
    currentIndex: number;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

export default function ImageModal({
    images,
    currentIndex,
    onClose,
    onNext,
    onPrev,
}: ImageModalProps) {

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") onNext();
            if (e.key === "ArrowLeft") onPrev();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [onClose, onNext, onPrev]);

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div
                className="absolute inset-0"
                onClick={onClose}
            />
            <button
                onClick={onClose}
                className="absolute top-12 right-20 text-white text-3xl"
            >
                <FaTimes />
            </button>
            <div className="relative flex flex-row place-content-around gap-2 max-w-[90%] z-10">
                {images.length > 1 && (
                    <button
                        onClick={onPrev}
                        className="flex-1 bg-neutral-200 text-3xl cursor-pointer hover:bg-neutral-300"
                    >
                        <FaChevronLeft />
                    </button>
                )}
                <img
                    src={images[currentIndex]}
                    alt="Project preview"
                    className="w-full max-h-[80vh] min-w-[75vw] max-w-[75vw] object-contain"
                />
                {images.length > 1 && (
                    <button
                        onClick={onNext}
                        className="flex-1 bg-neutral-200 text-3xl cursor-pointer hover:bg-neutral-300"
                    >
                        <FaChevronRight />
                    </button>
                )}
            </div>
        </div>
    );
}
