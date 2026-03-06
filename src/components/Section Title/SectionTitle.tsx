import type { PropsWithChildren } from "react";

export default function SectionTitle({children}: PropsWithChildren) {
    return (
        <div className="w-full border-neutral-50 border-t border-b shadow-m cursor-default">
            <div className="w-full h-3 md:h-5 bg-main" />
            <h3 className="w-full flex flex-row items-center gap-5 md:gap-8 place-content-center text-xl md:text-3xl font-bold text-center p-5">
                {children}
            </h3>
        </div>
    )
}