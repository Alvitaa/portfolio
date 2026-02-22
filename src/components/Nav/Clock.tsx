import { useEffect, useMemo, useState } from "react";

const Clock = () => {
    const [date, setDate] = useState(new Date());
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 850);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const timerID = setInterval(() => { setDate(new Date()) }, 1000);
        return () => clearInterval(timerID);
    }, []);

    const timeString = useMemo(() => date.toLocaleTimeString("en-US", {
        timeZone: "America/Lima", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false
    }), [date]);

    return <span className="w-18 text-right font-bold">{isMobile ? timeString.slice(0, -3) : timeString}</span>;
};

export default Clock;