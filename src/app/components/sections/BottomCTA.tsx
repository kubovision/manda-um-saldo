'use client';
import Image from 'next/image';

export default function BottomCTA() {
    return (
        <section id='bottom-cta' className='
        w-full h-450 pt-24 flex items-center flex-col relative
        bg-[url("/images/FinalCTA/bg_finalcta.webp")] bg-center bg-cover bg-no-repeat
        '>
            <h2 className='mb-8 text-[3.5em] text-white font-bold text-center
            '>Pronto para começar a receber?</h2>
            <Image
                src="/images/coins/coin-1.webp"
                alt="Imagem de um telefone"
                width={40}
                height={200}
                className="absolute top-125 animate-move-up-down-fast"
            />
            <Image
                src="/images/coins/coin-2.webp"
                alt="Imagem de um telefone"
                width={40}
                height={200}
                className="absolute max-md:left-10 top-105 left-110 animate-blink-slow"
            />
            <Image
                src="/images/coins/coin-3.webp"
                alt="Imagem de um telefone"
                width={40}
                height={200}
                className='absolute max-md:left-8 top-64 left-80 animate-move-up-down'
            />
            <Image
                src="/images/coins/coin-1.webp"
                alt="Imagem de um telefone"
                width={40}
                height={200}
                className='absolute max-md:left-15 top-84 left-150 animate-move-up-down'
            />
        </section>
    )
}