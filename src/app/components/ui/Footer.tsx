'use client';
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 flex flex-col items-center justify-center">
            <div className="w-full footer-top bg-gray-800 flex flex-col lg:items-center
             lg:flex-row lg:h-35 lg:justify-center
            ">
                <div className="w-110 h-110 flex-center relative
                lg:h-full 
                ">
                    <div className="w-90 h-110 bg-mus-black flex-center overflow-hidden 
                    absolute -top-10 left-[50%] translate-x-[-50%] rounded-2xl animate-float
                    ">
                        <Image
                            src="/images/logo07_transp.webp"
                            alt="Manda Um Saldo"
                            width={150}
                            height={120}
                            priority // melhora LCP
                        />
                    </div>
                </div>
                <div className="py-8 ml-28 flex items-center justify-center 
                lg:h-full lg:py-0">
                    <div className="max-w-7xl">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div>
                                <h3 className="text-2xl text-white font-bold">Receba Novidades</h3>
                                <p className="text-gray-400 text-xl">Inscreva-se para atualizações da plataforma</p>
                            </div>
                            <div className="flex flex-col gap-2 w-full mt-4 md:w-auto lg:mt-0 lg:flex-row">
                                <input
                                    type="email"
                                    placeholder="Seu e-mail"
                                    className="flex-1 md:w-94 bg-gray-700 border border-gray-600 rounded px-4 py-4 text-2xl text-white placeholder-gray-400 focus:outline-none focus:border-mus-orange"
                                />
                                <button className="bg-mus-orange text-white px-6 py-4 rounded text-2xl font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap">
                                    Subscrever Agora!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full footer-bottom bg-[#101828] flex items-center justify-center 
            ">
                <div className="hidden h-full w-90
                lg:flex lg:h-45"></div>
                <div className="h-full flex items-center justify-center">
                    <div className="max-w-7xl max-md:pr-4 ">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-38 mb-8 py-18 px-8
                        lg:py-0 lg:px-0 lg:pt-14  
                        ">
                            {/* Parcerias */}
                            <div>
                                <h4 className="text-2xl text-white font-bold mb-4 border-b border-gray-700 pb-2">Links</h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-[1.6em] text-gray-400 hover:text-white transition-colors">Como Funciona?</a></li>
                                    <li><a href="#" className="text-[1.6em] text-gray-400 hover:text-white transition-colors">Recursos</a></li>
                                    <li><a href="#" className="text-[1.6em] text-gray-400 hover:text-white transition-colors">Métodos de Pagamento</a></li>
                                </ul>
                            </div>
                            {/* Sobre */}
                            <div>
                                <h4 className="text-2xl text-white font-bold mb-4 border-b border-gray-700 pb-2">Sobre</h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-[1.6em] text-gray-400 hover:text-white transition-colors">Nossos Projectos</a></li>
                                    <li><a href="#" className="text-[1.6em] text-gray-400 hover:text-white transition-colors">Carreiras</a></li>
                                </ul>
                            </div>
                            {/* Suporte */}
                            <div>
                                <h4 className="text-2xl text-white font-bold mb-4 border-b border-gray-700 pb-2">Suporte</h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-[1.6em] text-gray-400 hover:text-white transition-colors">Pedido de Suporte</a></li>
                                    <li><a href="#" className="text-[1.6em] text-gray-400 hover:text-white transition-colors">Contacto</a></li>
                                    <li><a href="#" className="text-[1.6em] text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* Bottom Bar */}
                        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-gray-800">
                            <div className="text-gray-400 text-xl mb-4 md:mb-0">
                                © {new Date().getFullYear()} Manda Um Saldo. Todos os direitos reservados.
                            </div>
                            <div className="flex gap-3">
                                <a href="#" className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-mus-orange transition-colors">
                                    <FaFacebookF />
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-mus-orange transition-colors">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-mus-orange transition-colors">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-mus-orange transition-colors">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}