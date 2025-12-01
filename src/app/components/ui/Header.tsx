'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NavigationItem } from '@/types';
import Image from "next/image";

interface HeaderProps {
    navigation: NavigationItem[];
}

export default function Header({ navigation }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        // Inicializa o estado chamando o handler uma vez
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            id="header"
            className={`fixed left-0 right-0 top-0 z-50 flex w-full items-center justify-center transition-all duration-500 max-md:h-20 max-md:px-0 ${isScrolled ? 'h-20 px-0' : 'h-36 px-40'
                }`}
        >
            <div
                className={`
                    h-24
                    w-full
                    flex
                    items-center 
                    justify-between 
                    border border-black/10 
                    bg-mus-accent
                    px-4 
                    shadow-[0_5px_15px_rgba(0,0,0,0.35)] 
                    transition-all duration-500 
                    max-md:rounded-none
                    max-md:h-32
                    max-md:pt-4 
                    ${isScrolled ? 'md:rounded-none md:px-20' : 'md:rounded-lg md:px-4'
                    }`}
            >
                {/* Logo + Navegação */}
                <div className="flex items-center gap-4">
                    <Link href="/" className="h-full flex items-center">
                        <Image
                            src="/images/logo-01.webp"
                            alt="Manda Um Saldo"
                            width={200}
                            height={120}
                            priority // melhora LCP
                        />
                    </Link>

                    {/* Navegação Desktop */}
                    <nav className="items-center gap-2 md:flex [@media(max-width:1024px)]:hidden">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="px-4 py-2 text-[1.5rem] text-mus-black tracking-[0.1rem] no-underline transition-colors hover:text-black"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Ações de Login */}
                <div className="
                flex 
                items-center 
                gap-2
                ">
                    <Link
                        href="/login"
                        className="
                        px-6 
                        py-3 
                        text-[1.6rem] 
                        tracking-[0.1rem] 
                        text-mus-black 
                        no-underline
                        max-md:hidden
                        "
                    >
                        Entrar
                    </Link>
                    <Link
                        href="/register"
                        className="rounded-md bg-mus-orange px-6 py-3 text-[1.6rem] tracking-[0.1rem] text-white no-underline"
                    >
                        Cadastrar
                    </Link>
                </div>
            </div>
        </header>
    );
}