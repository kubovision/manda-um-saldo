'use client';
import Link from 'next/link';
import Image from "next/image"
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { IoIosArrowUp } from "react-icons/io";
import { FaCircle } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full">
            <div className="w-full py-10 lg:h-35 bg-gray-800 flex-center">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <h3 className="text-2xl text-white font-bold">Receba Novidades</h3>
                        <p className="text-gray-400 text-xl">Inscreva-se para atualizações da plataforma</p>
                    </div>
                    <div className="flex flex-col gap-2 w-full mt-4 md:w-auto lg:mt-0 lg:flex-row">
                        <input
                            type="email"
                            placeholder="Seu e-mail"
                            className="flex-1 md:w-124 bg-gray-700 border border-gray-600 rounded px-4 py-4 text-2xl text-white placeholder-gray-400 focus:outline-none focus:border-mus-orange"
                        />
                        <button className="bg-mus-orange text-white px-6 py-4 rounded-2xl text-2xl font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap">
                            Subscrever Agora!
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-full px-4 py-15 flex flex-col items-center bg-mus-accent
            lg:px-40'>
                <div className="w-full flex flex-col pb-10 lg:flex-row lg:items-end lg:justify-between">
                    <div className='w-full lg:w-lg'>
                        <Image
                            src="/images/logo03_small_transp.webp"
                            alt="Logo Manda Um Saldo"
                            width={230}
                            height={150}
                            className='mb-4'
                            priority
                        />
                        <p className='mb-4 text-2xl lg:text-xl text-mus-black
                        '>O Manda Um Saldo (MUS) é uma plataforma angolana que facilita o apoio financeiro rápido e acessível para criadores, freelancers e trabalhadores informais.</p>
                        <div className="flex gap-3">
                            <a href="#" className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-mus-orange transition-colors">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-mus-orange transition-colors">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-mus-orange transition-colors">
                                <FaTwitter />
                            </a>
                            <a href="#" className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-mus-orange transition-colors">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 mt-8">
                        <div className="flex flex-col gap-2 text-2xl  text-mus-black/60
                        lg:flex-row lg:justify-between lg:text-xl
                        ">
                            <Link href="/" className='lg:hover:text-mus-orange'>Sobre</Link>
                            <Link href="/" className='flex items-center gap-2 lg:hover:text-mus-orange'>Recursos <IoIosArrowUp /></Link>
                            <Link href="/" className='lg:hover:text-mus-orange'>Blog</Link>
                            <Link href="/" className='lg:hover:text-mus-orange'>FAQ</Link>
                            <Link href="/" className='lg:hover:text-mus-orange'>Contato</Link>
                        </div>
                        <div className="flex flex-col gap-3 text-2xl  text-mus-black/60
                        lg:flex-row lg:text-xl
                        ">
                            <Link href="/" className='lg:hover:text-mus-orange flex items-center gap-2'><FaCircle size={5} className='text-mus-black' />Política de Privacidade</Link>
                            <Link href="/" className='lg:hover:text-mus-orange flex items-center gap-2'><FaCircle size={5} className='text-mus-black' />Termos de Uso</Link>
                            <Link href="/" className='lg:hover:text-mus-orange flex items-center gap-2'><FaCircle size={5} className='text-mus-black' />Política de Cookies</Link>
                        </div>
                    </div>
                </div>
                <div className="fancy-border w-full pt-10 flex justify-center">
                    <div className="text-mus-black/60 text-xl">
                        © {new Date().getFullYear()} Manda Um Saldo. <span className='font-medium'>Todos os direitos reservados.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}