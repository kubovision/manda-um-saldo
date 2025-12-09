// StackedCards.tsx
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Card } from '@/src/types';
import CardItem from './HowWorkCards';
import { GiPayMoney } from "react-icons/gi";
import { CiCoinInsert } from "react-icons/ci";
import { PiNumberOneBold, PiNumberTwoBold, PiNumberThreeBold } from "react-icons/pi";

export default function ForSupporters() {
    const [cards, setCards] = useState<Card[]>([
        // Agora, o 'content' aqui define APENAS o conteúdo
        {
            id: 1, top: '50%', zIndex: 3, bgColor: 'bg-white', content: (
                <div className="w-full h-full flex flex-col justify-center">
                    <CiCoinInsert className="text-[#D3AF37] text-[3.6em]" />
                    <p className="text-[2em] text-mus-black font-medium my-8
                ">Busca por nome ou usa link directo partilhado pelo criador.</p>
                    <div className="flex items-center">
                        <span className="bg-mus-orange w-12 h-12 rounded-[50%] flex-center text-[1.5em] text-white
                        ">
                            <PiNumberOneBold />
                        </span>
                        <p className="text-[1.8em] text-mus-black font-medium ml-2
                        ">Encontra um criador</p>
                    </div>
                </div>
            )
        },
        {
            id: 2, top: '45%', zIndex: 2, bgColor: 'bg-mus-black', content: (
                <div className="w-full h-full flex flex-col justify-center">
                    <div className='w-full flex'>
                        <CiCoinInsert className="text-[#D3AF37] text-[3.6em]" />
                        <CiCoinInsert className="text-[#D3AF37] text-[3.6em]" />
                    </div>
                    <p className="text-[2em] text-white font-medium my-8
                ">500, 1000, 2000 Kz ou qualquer valor personalizado.</p>
                    <div className="flex items-center">
                        <span className="bg-mus-orange w-12 h-12 rounded-[50%] flex-center text-[1.5em] text-white
                            ">
                            <PiNumberTwoBold />
                        </span>
                        <p className="text-[1.8em] text-white font-medium ml-2
                            ">Escolhe o valor</p>
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
                ">Paga com Unitel Money, Africell Money ou Multicaixa em segundos.</p>
                    <div className="flex items-center">
                        <span className="bg-mus-orange w-12 h-12 rounded-[50%] flex-center text-[1.5em] text-white
                            ">
                            <PiNumberThreeBold />
                        </span>
                        <p className="text-[1.8em] text-mus-black font-medium ml-2">Manda o saldo</p>
                    </div>
                </div>
            )
        },
    ]);

    // ... (Lógica de rotação rotateCards e useEffect permanece inalterada) ...
    // [Seu código para isAnimating, rotateCards e useEffect aqui]

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
        <div className="flex flex-col items-center justify-center h-auto py-8 bgd-gradient">
            <div className="w-24 h-24 flex-center bg-mus-black rounded-[50%]
                text-[2.5em] text-white">
                <GiPayMoney />
            </div>
            <h3 className='mt-4 mb-8 text-center text-[1.8em] text-mus-black font-medium'>
                Para Apoiadores
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