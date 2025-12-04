'use client';
import { useState } from 'react';
import ForCreator from "../utils/ForCreator";
import ForSupporters from "../utils/ForSupporters";
import { BsCoin } from "react-icons/bs";
import { FaUsersGear } from "react-icons/fa6";

// ... (Classes e Tipos permanecem os mesmos) ...
const buttonBaseClass = 'px-6 py-4 rounded-2xl text-mus-black border-2 font-semibold tracking-wide text-[1.6em] transition-colors duration-300 shadow-lg';
const buttonActiveClass = ' border-mus-orange bg-mus-orange text-white';
const buttonInactiveClass = ' border-mus-orange lg:hover:bg-mus-orange lg:hover:text-white';
type ViewMode = 'creator' | 'supporter';

export default function HowWorks() {
    const [viewMode, setViewMode] = useState<ViewMode>('creator');

    const getButtonClass = (mode: ViewMode) => {
        const isActive = viewMode === mode;
        return `${buttonBaseClass} ${isActive ? buttonActiveClass : buttonInactiveClass}`;
    };

    return (
        <section id="como-funciona" className="
        w-full px-4 pt-40 pb-20 flex flex-col 
        lg:flex lg:flex-row lg:gap-8 lg:px-40
        ">
            
            {/* CONTAINER ESQUERDO (50% de largura) */}
            {/* Este novo container agrupa Título e Botões, e força o layout interno a ser COLUMN no desktop */}
            <div className="w-full lg:flex lg:flex-col lg:flex-[1_1_50%]"> 
                
                {/* 1. TÍTULO E TEXTO (Antigo section-top) */}
                <div className="section-top w-full flex flex-col mb-8">
                    <div className='w-70 inline-flex items-center justify-center mx-auto gap-2 bg-mus-orange/10 text-mus-orange 
                    px-4 py-2 rounded-full text-[1.4em] font-semibold mb-4 lg:mx-0'>
                        <FaUsersGear size={14} />
                        <h2 className="
                        ">COMO FUNCIONA?</h2>
                    </div>
                    <h3 className="mb-8 text-[3.2em] text-mus-black font-bold leading-16
                    ">Tão simples como mandar um saldo para um amigo</h3>
                    <p className="text-[1.6em] text-mus-black opacity-60
                    ">Dar apoio não precisa ser complicado. Com MUS, basta escolher o valor e enviar. Um pequeno gesto faz uma grande diferença na vida de quem cria.</p>
                </div>

                {/* 2. BOTÕES E MOEDAS */}
                <div className="w-full flex flex-col">
                    <div className="my-8 flex items-center justify-center gap-4">
                        <button
                            className={getButtonClass('creator')}
                            onClick={() => setViewMode('creator')}
                        >Para Criadores</button>
                        <button
                            className={getButtonClass('supporter')}
                            onClick={() => setViewMode('supporter')}
                            >Para Apoiadores</button>
                    </div>

                    {/* Exibe o indicador de 'Criadores' */}
                    <div className={`mx-auto flex items-center ${viewMode === 'supporter' ? 'hidden' : ''}`}>
                        <span className="w-18 h-12 mr-4 flex items-center border-r border-black/8 text-[2em] overflow-hidden">
                            <BsCoin className="animate-move-and-spin text-mus-orange" />
                        </span>
                        <p className="text-center text-[1.6em] text-mus-black opacity-60">Começa a receber em minutos</p>
                        <span className="w-18 h-12 ml-4 flex items-center justify-end border-l border-black/8 text-[2em] overflow-hidden">
                            <BsCoin className="animate-move-and-spin-reverse text-mus-orange" />
                        </span>
                    </div>
                    
                    {/* Exibe o indicador de 'Apoiadores' */}
                    <div className={`mx-auto flex items-center ${viewMode === 'creator' ? 'hidden' : ''}`}>
                        <span className="w-18 h-12 mr-4 flex items-center border-r border-black/8 text-[2em] overflow-hidden">
                            <BsCoin className="animate-move-and-spin text-mus-orange" />
                        </span>
                        <p className="text-center text-[1.6em] text-mus-black opacity-60">Apoia teus criadores favoritos</p>
                        <span className="w-18 h-12 ml-4 flex items-center justify-end border-l border-black/8 text-[2em] overflow-hidden">
                            <BsCoin className="animate-move-and-spin-reverse text-mus-orange" />
                        </span>
                    </div>

                </div>
            </div> {/* FIM DO CONTAINER ESQUERDO */}
            
            {/* CONTAINER DIREITO (50% de largura) */}
            {/* O container dos cards agora ocupa a outra metade, permitindo que o layout seja 2 colunas no desktop. */}
            <div className="w-full mt-8 lg:mt-0 lg:flex-[1_1_50%]"> 
                <div className="w-full overflow-hidden mx-auto relative">
                    {viewMode === 'creator' && <ForCreator />}
                    {viewMode === 'supporter' && <ForSupporters />}
                </div>
            </div>
        </section>
    );
}