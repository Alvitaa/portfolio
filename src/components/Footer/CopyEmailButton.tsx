import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaCheck } from "react-icons/fa";

interface Props {
    user: string;
    domain: string;
}

export default function CopyEmailButton({ user, domain }: Props) {
    const {t} = useTranslation("home");
    const email = `${user}@${domain}`;
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
        } catch (err) {
            console.error("Error copying email:", err);
        }
    };

    useEffect(() => {
        if (!copied) return;

        const timeout = setTimeout(() => {
            setCopied(false);
        }, 2500);

        return () => clearTimeout(timeout);
    }, [copied]);

    return (
        <button
            onClick={handleCopy}
            className={"flex flex-row text-white transition-all duration-300 ease-in-out"}
        >
            <span className="underline">
                Email
            </span>
            <span
                className={` pl-2 underline-0
            text-white flex flex-row items-center gap-2
          transition-opacity duration-300
          ${copied ? "opacity-100" : "opacity-0"}
        `}
            >
                - {t("footer.copied")}! <FaCheck />
            </span>
        </button>
    );
}
