'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { NavigationItem } from "@/types";
import { CgMenuRight } from "react-icons/cg";
import { RiCloseLargeLine } from "react-icons/ri";

interface HeaderProps {
    navigation: NavigationItem[];
}

export default function Header({ navigation }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handler = () => setIsScrolled(window.scrollY > 100);
        handler();
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <header
            className={`
        fixed inset-x-0 top-0 z-50 flex justify-center items-center
        transition-all duration-500
        h-24
        ${isScrolled ? "lg:px-0 lg:h-24" : "lg:px-40 lg:h-34"}
        `}
        >
            <div className={`
            w-full h-24 px-4 flex items-center justify-between
            bg-mus-accent rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.35)]
            transition-all duration-500
            ${isScrolled ? "lg:px-40" : "lg:px-4"}
            `}
            >
                {/* Left — Logo + Desktop Nav */}
                <div className="flex items-center gap-4">
                    {/* Small Logo */}
                    <Link href="/" className="lg:hidden">
                        <Image
                            src="/images/logo-small_transp.webp"
                            width={35}
                            height={120}
                            alt="Manda Um Saldo"
                            priority
                        />
                    </Link>

                    {/* Large Logo */}
                    <Link href="/" className="hidden lg:block">
                        <Image
                            src="/images/logo03_small_transp.webp"
                            width={180}
                            height={120}
                            alt="Manda Um Saldo"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="
                  px-4 py-2 text-[1.5em] font-semibold tracking-wide
                  text-mus-black opacity-80 hover:opacity-100
                  transition-colors
                "
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Right — Login / Signup / Mobile Menu */}
                <div className="flex items-center gap-4">
                    {/* Desktop Login */}
                    <Link
                        href="/login"
                        className="hidden lg:flex py-3 px-6 text-[1.5em] font-semibold text-mus-black"
                    >
                        Entrar
                    </Link>

                    {/* Desktop Signup */}
                    <Link
                        href="/signup"
                        className="
                        px-6 py-4 rounded-2xl bg-mus-orange text-white
                        font-semibold tracking-wide text-[1.5em]
                        hover:bg-orange-600 transition-colors
                        "
                    >
                        Criar Página
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        aria-label="Abrir Menu"
                        onClick={() => setIsOpen(true)}
                        className="lg:hidden text-[3rem] text-mus-black w-14 h-14 flex items-center justify-center"
                    >
                        <CgMenuRight />
                    </button>
                </div>

                {/* Mobile Sidebar */}
                <div
                    className={`
            fixed top-0 right-0 w-80 h-screen bg-mus-accent shadow-xl
            flex flex-col px-6 py-6
            transition-transform duration-300
            lg:hidden
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
                >
                    {/* Close Button */}
                    <button
                        aria-label="Fechar Menu"
                        onClick={() => setIsOpen(false)}
                        className="self-end text-[3rem] text-mus-black"
                    >
                        <RiCloseLargeLine />
                    </button>

                    {/* Mobile Links */}
                    <nav className="flex flex-col mt-10 gap-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="
                  text-[1.6em] text-mus-black font-semibold
                  tracking-wide text-right pb-2
                "
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Buttons */}
                    <div className="mt-auto pb-20 flex flex-col gap-4 text-center">
                        <Link
                            href="/login"
                            className="btn min-w-full py-3 text-mus-black font-semibold"
                            onClick={() => setIsOpen(false)}
                        >
                            Entrar
                        </Link>

                        <Link
                            href="/signup"
                            className="
                btn min-w-full py-3 text-white font-semibold
                bg-mus-orange rounded-xl
              "
                            onClick={() => setIsOpen(false)}
                        >
                            Criar Página
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
