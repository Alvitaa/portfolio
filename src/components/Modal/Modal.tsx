import { useEffect, type PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import { FaTimesCircle } from "react-icons/fa";

interface ModalProps extends PropsWithChildren {
    isOpen: boolean;
    onClose: () => void;
}

function Modal({ isOpen, onClose, children }: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleKey);
        return () => {
            window.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [onClose, isOpen])

    return createPortal(
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-5">
            <div
                className="absolute inset-0"
                onClick={onClose}
            />
            <button
                onClick={onClose}
                className="absolute top-10 md:top-15 right-5 md:right-20 text-white text-3xl"
            >
                <FaTimesCircle />
            </button>
            {children}
        </div>,
        document.body
    );
}

export default Modal;