// StackedCards.tsx
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Card } from '@/src/types';
import CardItem from './HowWorkCards';
import { BsTools } from "react-icons/bs";
import { CiCoinInsert } from "react-icons/ci";
import { PiNumberOneBold, PiNumberTwoBold, PiNumberThreeBold } from "react-icons/pi";

export default function ForCreator() {
    const [cards, setCards] = useState<Card[]>([
        {
            id: 1, top: '50%', zIndex: 3, bgColor: 'bg-white', content: (
                <div className="w-full h-full flex flex-col justify-center">
                    <CiCoinInsert className="text-[#D3AF37] text-[3.6em]" />
                    <p className="text-[2em] text-mus-black font-medium my-8
                    ">Registo em 2 minutos, perfil personalizado com tua foto e bio.</p>
                    <div className="flex items-center">
                        <span className="bg-mus-orange w-12 h-12 rounded-[50%] flex-center text-[1.5em] text-white
                        ">
                            <PiNumberOneBold />
                        </span>
                        <p className="text-[1.8em] text-mus-black font-medium ml-2
                        ">Criar tua página</p>
                    </div>
                </div>
            )
        },
        {
            id: 2, top: '45%', zIndex: 2, bgColor: 'bg-mus-green', content: (
                <div className="w-full h-full flex flex-col justify-center">
                    <div className='w-full flex'>
                        <CiCoinInsert className="text-[#112A46] text-[3.6em]" />
                        <CiCoinInsert className="text-[#112A46] text-[3.6em]" />
                    </div>
                    <p className="text-[2em] text-black/80 font-medium my-8
                    ">Coloca na bio do TikTok, Instagram, YouTube e outras redes.</p>
                    <div className="flex items-center">
                        <span className="bg-[#112A46] w-12 h-12 rounded-[50%] flex-center text-[1.5em] text-mus-green
                            ">
                            <PiNumberTwoBold />
                        </span>
                        <p className="text-[1.8em] text-mus-black font-medium ml-2
                            ">Partilha teu link</p>
                    </div>
                </div>
            )
        },
        {
            id: 3, top: '40%', zIndex: 1, bgColor: 'bg-mus-accent', content: (
                <div className="w-full h-full flex flex-col justify-center">
                    <div className='w-full flex'>
                        <CiCoinInsert className="text-[#D3AF37] text-[3.6em]" />
                        <CiCoinInsert className="text-[#D3AF37] text-[3.6em]" />
                        <CiCoinInsert className="text-[#D3AF37] text-[3.6em]" />
                    </div>
                    <p className="text-[2em] text-mus-black font-medium my-8
                    ">Directo para tua conta, sem intermediários a reter teu dinheiro.</p>
                    <div className="flex items-center">
                        <span className="bg-mus-orange w-12 h-12 rounded-[50%] flex-center text-[1.5em] text-white
                            ">
                            <PiNumberThreeBold />
                        </span>
                        <p className="text-[1.8em] text-mus-black font-medium ml-2">Recebe apoios</p>
                    </div>
                </div>
            )
        },
    ]);

    const isAnimating = useRef(false);

    const rotateCards = useCallback(() => {
        if (isAnimating.current) return;

        isAnimating.current = true;

        // 1. ANIMAÇÃO DE SAÍDA: Faz o card do topo (index 0) subir
        setCards(prev => prev.map((card, index) =>
            index === 0
                ? { ...card, top: '20%', zIndex: 10 } // Sobe e garante que fique acima de todos
                : card
        ));

        // 2. REORDENAÇÃO: Após o tempo da animação (300ms), troca as posições
        setTimeout(() => {
            setCards(prev => {
                const newCards = [...prev];
                const firstCard = newCards.shift();

                if (firstCard) {
                    newCards.push(firstCard);
                }

                // Recalcula as posições baseadas no novo índice
                return newCards.map((card, index) => ({
                    ...card,
                    top: `${50 - (index * 5)}%`, // 50%, 45%, 40%
                    zIndex: newCards.length - index
                }));
            });

            isAnimating.current = false;
        }, 300);
    }, []);

    // Auto-rotate
    useEffect(() => {
        const interval = setInterval(rotateCards, 5000);
        return () => clearInterval(interval);
    }, [rotateCards]);


    return (
        <div className="flex flex-col items-center justify-center h-auto py-8 bgd-gradient
        
        ">
            <div className="w-24 h-24 flex-center bg-mus-green rounded-[50%]
                text-[2em] text-mus-black">
                <BsTools />
            </div>
            <h3 className='mt-4 mb-8 text-center text-[1.8em] text-mus-black font-medium'>
                Para Criadores
            </h3>
            <div className="relative h-100 w-full perspective-1000 flex justify-center
            lg:w-220 lg:h-160
            ">
                {cards.map((card, index) => (
                    // CHAMADA DO NOVO COMPONENTE:
                    <CardItem
                        key={card.id}
                        card={card}
                        rotateCards={rotateCards}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}