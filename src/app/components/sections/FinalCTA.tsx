'use client';
import Link from 'next/link';

export default function FinalCTA() {
    return (
        <section id='final-cta' className='
        w-full
        h-450
        pt-24
        flex
        items-center
        flex-col
        bg-[url("/images/FinalCTA/bg-finalcta.png")]
        bg-center
        bg-cover
        bg-no-repeat
        '>
            <h2 className='
            mb-8
            text-[3.5em]
            text-white
            font-bold
            '>Pronto para começar a receber?</h2>
            <Link href='' className='
            px-8 py-6
            bg-mus-orange
            text-white
            rounded-lg
            text-[1.5em]
            font-bold
            '>CRIAR MINHA PÁGINA</Link>
        </section>
    )
}