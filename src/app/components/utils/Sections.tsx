import { SectionProps } from '@/types';
import { useEffect, useRef } from "react";

export default function Sections({ name, title, children, className = "" }: SectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        function checkVisibility() {
            if (!sectionRef.current || !titleRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();

            const visible =
                rect.top < window.innerHeight &&
                rect.top >= 200; // Ajusta para o momento exato da animação

            if (visible) {
                titleRef.current.classList.add("active");
            } else {
                titleRef.current.classList.remove("active");
            }
        }

        window.addEventListener("scroll", checkVisibility);
        checkVisibility(); // executa na entrada

        return () => window.removeEventListener("scroll", checkVisibility);
    }, []);

    return (
        <div ref={sectionRef} className={`
            w-[60%]
            flex
            flex-col
            items-center
            max-md:w-full
            ${className}
            `}>
            <h2 ref={titleRef} className="nameSection">{name}</h2>
            <h3 className="titleSection">{title}</h3>
            <p className="paragraphSection">{children}</p>
        </div>
    );
};