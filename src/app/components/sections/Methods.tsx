'use client';
import Sections from '@/app/components/utils/Sections';
import { FaCheckDouble } from "react-icons/fa6";
import Image from 'next/image';

export default function Methods() {
    return (
        <section id='metodos' className='
        sectionStyle
        '>
            <Sections
                name='Métodos Disponiveis'
                title='Apoia Usando o Método que Preferires'
            >
                Disponibilizamos integrações com os métodos mais comuns em Angola, garantindo rapidez, segurança e praticidade em cada contribuição..
            </Sections>
            <div className='methodsContainer
            w-full
            flex
            flex-wrap
            '>
                <div className='methodsBox
                w-[55%]
                h-auto
                min-h-80
                flex
                flex-wrap
                gap-4
                p-20
                '>
                    <div className='methodsItem unitelMoney

                    '>unitemoney</div>
                    <div className='methodsItem afriMoney'>africamoney</div>
                    <div className='methodsItem express'>express</div>
                    <div className='methodsItem ekwanza'>ekwanza</div>
                    <div className='methodsItem paypay'>paypay</div>
                    <div className='methodsItem binance'>binance</div>
                    <div className='methodsItem airtm'>airtm</div>
                    <div className='methodsItem multicaixa'>multicaixa</div>
                </div>
                <div className='methodsFigure
                w-[45%]
                flex
                items-center
                justify-center
                relative
                '>
                    <div className='centerSpin
                    absolute
                    translate-x-[50%]
                    translate-y-[50%]
                    animate-diagonal
                    '>
                        <Image
                            src="/images/logo-transp.png"
                            alt="Manda Um Saldo"
                            width={180}
                            height={120}
                            priority // melhora LCP
                        />
                    </div>
                    <div className='spinContainer
                    w-110
                    h-110
                    flex
                    items-center
                    justify-center
                    rounded-[50%]
                    animate-spin
                    border border-[rgba(50,50,93,0.25)]
                    '>
                        <div className='spinItem
                        w-36
                        h-36
                        rounded-[50%]
                        bg-mus-accent
                        absolute
                        -top-18
                        left-[50%]
                        translate-x-[-50%]
                        border-5 border-white
                        '></div>
                        <div className='spinItem
                        w-36
                        h-36
                        rounded-[50%]
                        bg-mus-accent
                        absolute
                        -bottom-18
                        left-[50%]
                        translate-x-[-50%]
                        border-5 border-white
                        '></div>
                        <div className='spinItem
                        w-36
                        h-36
                        rounded-[50%]
                        bg-mus-accent
                        absolute
                        -left-18
                        top-[50%]
                        translate-y-[-50%]
                        border-5 border-white
                        '></div>
                        <div className='spinItem
                        w-36
                        h-36
                        rounded-[50%]
                        bg-mus-accent
                        absolute
                        -right-18
                        top-[50%]
                        translate-y-[-50%]
                        border-5 border-white
                        '></div>
                    </div>
                </div>
            </div>
            <div className='methodsCenter
            flex
            text-[1.5em]
            '>
                <FaCheckDouble className='text-mus-orange' />
                <span className='
                mr-4 ml-2
                '>Sem Cartões Internacionais</span>
                <FaCheckDouble className='text-mus-orange' />
                <span className='
                mr-4 ml-2
                '>Sem contas Complexas</span>
                <FaCheckDouble className='text-mus-orange' />
                <span className='
                mr-4 ml-2
                '>Pagamento em segundos</span>
            </div>
        </section >
    )
}