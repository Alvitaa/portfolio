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

            <div className="relative max-w-5xl w-[90%] z-10">
                <button
                    onClick={onClose}
                    className="absolute -top-10 right-0 text-white text-2xl"
                >
                    <FaTimes />
                </button>

                <img
                    src={images[currentIndex]}
                    alt="Project preview"
                    className="w-full max-h-[80vh] object-contain rounded-lg"
                />

                {images.length > 1 && (
                    <>
                        <button
                            onClick={onPrev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-3xl px-4"
                        >
                            <FaChevronLeft />
                        </button>

                        <button
                            onClick={onNext}
                            className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-3xl px-4"
                        >
                            <FaChevronRight />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
