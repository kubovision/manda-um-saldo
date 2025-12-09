// components/BackToTop.tsx (com barra de progresso)
'use client';

import { useState, useEffect } from 'react';
import { FiChevronUp } from 'react-icons/fi';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const currentProgress = (window.pageYOffset / totalHeight) * 100;

            setScrollProgress(currentProgress);

            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {/* Barra de progresso no topo */}
            <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-200">
                <div
                    className="h-full bg-mus-orange transition-all duration-300"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            {/* Botão de voltar ao topo */}
            <button
                onClick={scrollToTop}
                aria-label="Voltar ao topo"
                className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-lg transition-all duration-300 ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10 pointer-events-none'
                    } bg-mus-orange text-white hover:bg-orange-600 active:scale-95`}
            >
                <FiChevronUp className="text-4xl" />
                {/* Opcional: mostrar porcentagem */}
                <span className="absolute -top-2 -right-2 bg-white text-mus-orange text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center">
                    {Math.round(scrollProgress)}%
                </span>
            </button>
        </>
    );
}