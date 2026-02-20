import { useEffect, type PropsWithChildren } from "react";
import { FaTimesCircle } from "react-icons/fa";

interface ModalProps extends PropsWithChildren {
    onClose: () => void;
}

function Modal({ onClose, children }: ModalProps) {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [onClose])

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
                <FaTimesCircle />
            </button>
            {children}
        </div>
    );
}

export default Modal;