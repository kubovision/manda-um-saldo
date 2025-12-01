'use client';
import Image from "next/image";

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            {/* Newsletter Section */}
            <div className="bg-gray-800 py-8">
                <div className="max-w-7xl ml-auto pr-24 max-md:pr-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Receba Novidades</h3>
                            <p className="text-gray-400">Inscreva-se para atualizações da plataforma</p>
                        </div>
                        <div className="flex gap-2 w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Seu e-mail"
                                className="flex-1 md:w-64 bg-gray-700 border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-mus-orange"
                            />
                            <button className="bg-mus-orange text-white px-6 py-3 rounded font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap">
                                Subscrever Agora!
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex relative'>
                {/* logo */}
                <div className='w-100 h-110 bg-mus-black absolute -top-38 left-40 flex-center'>
                    <Image
                        src="/images/logo-transp.png"
                        alt="Manda Um Saldo"
                        width={200}
                        height={120}
                        priority // melhora LCP
                    />
                </div>
                {/* Main Footer Content */}
                <div className="w-full py-12">
                    <div className="max-w-7xl ml-auto pr-24 max-md:pr-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                            {/* Parcerias */}
                            <div>
                                <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Links</h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Websites</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Redes Sociais</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Branding</a></li>
                                </ul>
                            </div>
                            {/* Sobre */}
                            <div>
                                <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Sobre</h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Nossos Projectos</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Carreiras</a></li>
                                </ul>
                            </div>
                            {/* Suporte */}
                            <div>
                                <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Suporte</h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pedido de Suporte</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* Bottom Bar */}
                        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
                            <div className="text-gray-400 text-sm mb-4 md:mb-0">
                                © {new Date().getFullYear()} Manda Um Saldo. Todos os direitos reservados.
                            </div>
                            <div className="flex gap-3">
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-mus-orange transition-colors">
                                    <FaFacebookF />
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-mus-orange transition-colors">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-mus-orange transition-colors">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-mus-orange transition-colors">
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