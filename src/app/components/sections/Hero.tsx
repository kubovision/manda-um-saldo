'use client';
import Button01 from '@/app/components/buttons/Button01';
import Image from "next/image";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { FaBell, FaBolt } from "react-icons/fa6";
import { BsFillBalloonHeartFill } from "react-icons/bs";

const infoBoxClass = 'w-40 flex items-center justify-center'
const infoIconClass = 'w-14 h-14 rounded-[50%] bg-mus-orange text-white text-[1.7em] mr-4 flex-center'
const alertBoxClass = 'w-52 p-3 flex items-center absolute bg-white [box-shadow:var(--shadow-card)] rounded-[0.5rem] z-11'
const alertBoxIconClass = 'w-9 h-9 mr-4 flex-center bg-mus-orange rounded-[50%] text-white text-[1.3em]'
const alertBoxTextClass = 'pl-4 border-l border-black/16'

export default function Hero() {
    return (
        <section className="
        w-full
        h-screen
        relative
        bg-[url('/images/Hero/bgdHero-01.webp')]
        bg-center
        bg-cover 
        bg-no-repeat
        overflow-hidden
        before: content-['']
        before:absolute
        before:bottom-0
        before:left-1/2
        before:-translate-x-1/2
        before:w-1/2
        before:h-[0.1rem]
        before:bg-black/10
        before:z-10
        "
        >
            <div className='
            w-[70%]
            absolute
            top-[34%]
            left-[50%]
            -translate-x-1/2
            -translate-y-1/2
            max-md:w-full
            '
            >
                <h1
                    className='
                text-center
                text-[5em]
                font-bold
                text-mus-black
                mb-10
                max-md:text-[3.8em]
                '
                >
                    Recebe apoio dos teus fãs <br /> <span className='text-mus-orange uppercase font-black'>como nunca!</span>
                </h1>
                <div className='
                w-[80%]
                flex
                items-center
                justify-center
                gap-10
                mx-auto my-0
                max-md:w-full
                max-md:px-4
                max-md:gap-4
                '>
                    <Button01 href="/" className='
                    bg-mus-orange 
                    text-white
                    hover:scale-110
                    max-md:text-[1.4em]
                    max-md:hover:scale-100
                    '>Criar Minha Página</Button01>
                    <Button01 href="/" className='
                    hover:bg-mus-orange
                    hover:text-white
                    hover:scale-110
                    max-md:text-[1.4em]
                    max-md:hover:scale-100
                    max-md:hover:bg-mus-accent
                    max-md:hover:text-mus-black
                    '>Mandar um Saldo</Button01>
                </div>
                <p className='
                text-[1.3em]
                text-mus-black
                opacity-60
                text-center
                mt-6
                '>sem taxas, sem compilcações e leva apenas alguns minutos.</p>
            </div>
            <div className='
            w-lg
            h-200
            bg-white
            border-black border-10
            [box-shadow:rgba(0,0,0,0.56)_0px_22px_70px_4px]
            rounded-[3rem]
            relative
            -bottom-158
            left-[50%]
            animate-float-slow
            before:content-[""]
            before:absolute
            before:top-[110px]
            before:right-[-17px]
            before:w-6
            before:h-14
            before:bg-black
            [@media(max-height:600px)]:-bottom-139
            phoneContainer
            '>
                <div className='
                w-full
                h-24
                flex
                items-center
                justify-between
                px-4
                '>
                    <Image
                        src="/images/logo-01.webp"
                        alt="Logo Manda Um Saldo"
                        width={160}
                        height={120}
                        priority // melhora LCP
                    />
                    <HiOutlineMenuAlt1 className='text-[3rem] text-mus-black-500' />
                </div>
                <div className='
                w-full
                h-75
                p-8
                bg-mus-orange
                flex
                flex-col
                items-center
                '>
                    <div className='
                    w-40
                    h-40
                    mb-2
                    rounded-[50%]
                    overflow-hidden
                    '>
                        <Image
                        src="/images/Hero/profile.webp"
                        alt="imagem de perfil"
                        width={200}
                        height={120}
                        priority // melhora LCP
                    />
                    </div>
                    <h2 className='
                    mb-1
                    text-[2em]
                    text-white
                    font-bold
                    '>Carlos Alberto</h2>
                    <p className='
                    text-[1.4em]
                    text-white
                    opacity-70

                    '>Criador de Conteúdo</p>
                </div>
                <div className='
                w-full
                px-8 py-12
                flex
                justify-between
                items-center
                '>
                    <div className={infoBoxClass}>
                        <div className={infoIconClass}>
                            <FaHandHoldingHeart />
                        </div>
                        <div>
                            <p className='
                            text-[1.3em]
                            font-700
                            '>520</p>
                            <p className='
                            text-[1.3em]
                            opacity-60
                            '>Apoios</p>
                        </div>
                    </div>
                    <div className={infoBoxClass}>
                        <div className={infoIconClass}>
                            <GiReceiveMoney />
                        </div>
                        <div>
                            <p className='
                            text-[1.3em]
                            font-700
                            '>250k</p>
                            <p className='
                            text-[1.3em]
                            opacity-60
                            '>Recebido</p>
                        </div>
                    </div>
                </div>
                <div className={`alertBox
                ${alertBoxClass}
                bottom-[350px]
                -left-[30%]
                max-md:-left-[30px]
                `}>
                    <div className={`alertBoxIcon
                    ${alertBoxIconClass}
                    `}>
                        <FaBell />
                    </div>
                    <div className={`alertBox-text
                    ${alertBoxTextClass}
                    `}>
                        <p>🎉 Parabéns!</p>
                        <p>+ kz 500</p>
                    </div>
                </div>
                <div className={`alertBox
                ${alertBoxClass}
                bottom-[280px]
                -right-[30%]
                max-md:-right-12
                max-md:bottom-[380px]
                [@media(max-height:600px)]:bottom-[380px]
                `}>
                    <div className={`alertBoxIcon
                    ${alertBoxIconClass}
                    `}>
                        <FaBell />
                    </div>
                    <div className={`alertBox-text
                    ${alertBoxTextClass}
                    `}>
                        <p>🎉 Parabéns!</p>
                        <p>+ kz 1.000</p>
                    </div>
                </div>
                <div className={`alertBox
                ${alertBoxClass}
                bottom-64
                -right-[30%]
                max-md:-right-12
                max-md:bottom-[250px]
                [@media(max-height:600px)]:bottom-[230px]
                `}>
                    <div className={`alertBoxIcon
                    ${alertBoxIconClass}
                    `}>
                        <FaBell />
                    </div>
                    <div className={`alertBox-text
                    ${alertBoxTextClass}
                    `}>
                        <p>🎉 Parabéns!</p>
                        <p>+ kz 2.000</p>
                    </div>
                </div>
                <div className='heart-icon
                w-12
                h-12
                bg-mus-orange
                rounded-[50%]
                absolute
                flex-center
                text-white
                text-[1.3em]
                animate-blink-slow
                bottom-[140px]
                -left-[84px]
                '>
                    <BsFillBalloonHeartFill />
                </div>
                <div className='bolt-icon
                w-12
                h-12
                bg-mus-orange
                rounded-[50%]
                absolute
                flex-center
                text-white
                text-[1.3em]
                animate-float
                -top-[22px]
                -right-[84px]
                '>
                    <FaBolt />
                </div>
            </div>
        </section>
    )
}