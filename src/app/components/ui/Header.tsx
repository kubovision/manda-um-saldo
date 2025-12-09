'use client'
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react";
import { CgMenuRight } from "react-icons/cg";
import { RiCloseLargeLine } from "react-icons/ri";
import { NavigationItem } from '@/src/types/index';

interface HeaderProps {
    navegation: NavigationItem[];
}

export default function Header({ navegation }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handler = () => setIsScrolled(window.scrollY > 100);
        handler();
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <header className={`${isScrolled ? "lg:px-0 lg:h-24" : "lg:px-40 lg:h-34"}
        w-full fixed inset-x-0 top-0 z-50 
        flex-center transition-all duration-500`}>
            <div className={`${isScrolled ? "lg:px-40 lg:rounded-none" : "lg:px-4 lg:rounded-4xl"}
            w-full h-24 px-4 flex items-center justify-between 
            bg-mus-accent shadow-mus-header`}>
                {/* logo + menu */}
                <div className="flex items-center gap-4">
                    {/* small logo */}
                    <Link href="/" className="lg:hidden">
                        <Image
                            src="/images/logo-small_transp.webp"
                            width={35}
                            height={120}
                            alt="Manda Um Saldo - Small Logo"
                            priority
                        />
                    </Link>
                    {/* large logo */}
                    <Link href="/" className="hidden lg:block">
                        <Image
                            src={'/images/logo03_small_transp.webp'}
                            width={190}
                            height={120}
                            alt="Manda Um Saldo - Small Logo"
                            priority
                        />
                    </Link>
                    {/* Desktop Navigation */}
                    <nav className="hidden items-center lg:flex">
                        {navegation.map((item) => (
                            <Link
                                key={item.name} href={item.href}
                                className="
                                px-4 py-2
                                text-2xl font-thin text-black/80 lg:hover:text-mus-orange
                                tracking-wide whitespace-nowrap
                                transition-all duration-200
                                "
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Mobile Navigation + login/Signup */}
                <div className="flex items-center gap-4">
                    {/* login/signup */}
                    <Link
                        href="/entrar"
                        className="hidden px-6 py-4 text-2xl text-mus-black tracking-wide 
                        font-normal lg:block"
                    >
                        Entrar
                    </Link>
                    <Link
                        href="/criar-pagina"
                        className="px-6 py-4 text-2xl text-white tracking-wide 
                        bg-mus-orange rounded-4xl"
                    >
                        Criar Página
                    </Link>
                    {/* Mobile Navigation */}
                    <button
                        aria-label="Abrir Menu"
                        onClick={() => setIsOpen(true)}
                        className="lg:hidden text-5xl text-mus-black 
                    w-14 h-14 flex items-center justify-center">
                        <CgMenuRight />
                    </button>
                    {/* Mobile Sidebar */}
                    <div className={`${isOpen ? "translate-x-0" : "translate-x-full"}
                        fixed top-0 right-0 w-110 h-screen bg-mus-accent
                        shadow-xl px-8 py-6 transition-transform duration-300
                        flex flex-col lg:hidden`}
                    >
                        {/* Close Button */}
                        <button
                            type="button"
                            aria-label="Fechar Menu"
                            onClick={() => setIsOpen(false)}
                            className="self-end text-5xl text-mus-black
                        ">
                            <RiCloseLargeLine />
                        </button>
                        <nav className="flex flex-col mt-10 gap-6">
                            {navegation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="
                                    text-3xl text-mus-black font-medium
                                    tracking-wide text-right
                                    "
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                        {/* Mobile Login/Signup */}
                        <div className="mt-auto pb-40 flex flex-col gap-4 text-center">
                            <Link
                                href="/entrar"
                                onClick={() => setIsOpen(false)}
                                className="btn min-w-full text-mus-black font-semibold"
                            >
                                Entrar
                            </Link>

                            <Link
                                href="/criar-pagina"
                                onClick={() => setIsOpen(false)}
                                className="
                                btn min-w-full text-white font-semibold
                                bg-mus-orange"
                            >
                                Criar Página
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}