'use client'
import { useState } from "react";
import ForCreator from "../utils/ForCreator";
import ForSupporters from "../utils/ForSupporters";
import { FaUsersGear } from "react-icons/fa6";
import { BsCoin } from "react-icons/bs";

const buttonBaseClass = 'px-5 py-5 rounded-4xl text-mus-black border-2 font-medium tracking-wide text-[1.6em] transition-colors duration-300 shadow-lg';
const buttonActiveClass = ' border-mus-orange bg-mus-orange text-white';
const buttonInactiveClass = ' border-mus-orange lg:hover:bg-mus-orange lg:hover:text-white';
type ViewMode = 'creator' | 'supporter';

export default function HowWork() {
    const [viewMode, setViewMode] = useState<ViewMode>('creator');

    const getButtonClass = (mode: ViewMode) => {
        const isActive = viewMode === mode;
        return `${buttonBaseClass} ${isActive ? buttonActiveClass : buttonInactiveClass}`;
    };

    return (
        <section id="como-funciona" className="w-full px-4 pt-40 pb-20 flex flex-col items-center
        lg:px-40
        ">
            <div className="w-full">
                <div className="w-full flex flex-col items-center mb-8">
                    <div className="px-8 py-4 flex-center gap-2 rounded-4xl
                    bg-mus-orange/15 text-mus-orange text-2xl font-medium
                    ">
                        <FaUsersGear size={14} />
                        <h2 className="truncate">COMO FUNCIONA?</h2>
                    </div>
                    <h3 className="my-8 text-center text-6xl text-mus-black font-bold leading-20
                    lg:text-8xl/28 lg:w-7xl
                    ">Tão simples como mandar um saldo para <br />
                        <span className="text-mus-orange uppercase font-black">um amigo</span>
                    </h3>
                    <p className="text-center text-3xl text-mus-black/60 leading-10
                    lg:w-7xl
                    ">Dar apoio não precisa ser complicado. Com MUS, basta escolher o valor e enviar. Um pequeno gesto faz uma grande diferença na vida de quem cria.</p>
                </div>
                <div className="w-full flex flex-col">
                    <div className="my-8 flex-center gap-4">
                        <button
                            className={getButtonClass('creator')}
                            onClick={() => setViewMode('creator')}
                        >Para Criadores</button>
                        <button
                            className={getButtonClass('supporter')}
                            onClick={() => setViewMode('supporter')}
                        >Para Apoiadores</button>
                    </div>
                    <div className={`mx-auto flex items-center ${viewMode === 'supporter' ? 'hidden' : ''}`}
                    >
                        <span className="coin-style mr-4 border-r
                        "><BsCoin className="animate-move-and-spin text-mus-orange" /></span>
                        <p className="text-center text-3xl text-mus-black/60
                        ">Começa a receber em minutos</p>
                        <span className="coin-style ml-4 border-l justify-end
                        "><BsCoin className="animate-move-and-spin-reverse text-mus-orange" /></span>
                    </div>
                    <div className={`mx-auto flex items-center ${viewMode === 'creator' ? 'hidden' : ''}`}
                    >
                        <span className="coin-style mr-4 border-r
                        "><BsCoin className="animate-move-and-spin text-mus-orange" /></span>
                        <p className="text-center text-3xl text-mus-black/60
                        ">Apoia teus criadores favoritos</p>
                        <span className="coin-style ml-4 border-l justify-end
                        "><BsCoin className="animate-move-and-spin-reverse text-mus-orange" /></span>
                    </div>
                </div>
            </div>
            <div className="w-full mt-8
            ">
                <div className="w-full overflow-hidden mx-auto relative">
                    {viewMode === 'creator' && <ForCreator />}
                    {viewMode === 'supporter' && <ForSupporters />}
                </div>
            </div>
        </section>
    )
}