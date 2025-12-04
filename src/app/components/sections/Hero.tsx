'use client';
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaBolt } from "react-icons/fa6";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import { ImCoinDollar } from "react-icons/im";
import HeroCard from "./../utils/HeroCard";
import AlertBox from "./../utils/AlertBox";


export default function Hero() {
    return (
        <section className="
        w-full h-340 px-4 relative bg-[url(/images/Hero/bgdHero-01.webp)] bg-center
        bg-cover bg-no-repeat overflow-hidden lg:h-screen tablet-only:height
        heroSection
        ">
            <div className="
            w-full mt-45
            ">
                <h1 className="
                text-center text-[3.8em] font-bold text-mus-black
                ">
                    Recebe apoio dos teus fãs <br />
                    <span className='
                    text-mus-orange uppercase font-black'>
                        como nunca!
                    </span>
                </h1>
                <div className="
                w-full mt-8 flex items-center justify-center gap-6 
                ">
                    <Link href="/login" className="
                    btn
                    bg-mus-orange
                    text-white
                    ">
                        Criar Minha Página
                    </Link>
                    <Link href="/login" className="
                    btn
                    desktop-only:hover
                    ">
                        Mandar um Saldo
                    </Link>
                </div>
                <p className="
                mt-6 text-[1.3em] text-mus-black opacity-60 text-center
                ">
                    Sem taxas, sem compilcações e leva apenas alguns minutos.
                </p>
            </div>
            <div className="
            w-full mt-16 flex justify-center
            ">

                <div className="phoneContainer
                w-lg h-230 bg-white rounded-[4rem] border-12 border-black relative
                animate-float-slow [box-shadow:rgba(0,0,0,0.56)_0px_22px_70px_4px]
                phoneButton
                ">
                    <span className="phoneComponent01"></span>
                    <span className="phoneComponent02"></span>
                    <div className="
                    w-full h-32 flex items-end justify-between px-4 pb-6
                    ">
                        <Image
                            src="/images/logo-small_transp.webp"
                            alt="Logo Manda Um Saldo"
                            width={35}
                            height={120}
                            priority // melhora LCP
                        />
                        <div className="flex items-center gap-4">
                            <span className="py-3 px-6 bg-mus-orange rounded-2xl
                            text-white text-[1.2em]
                            ">Criar Página</span>
                            <HiOutlineMenuAlt1 className='text-[3rem] text-mus-black-500' />
                        </div>
                    </div>
                    <div className="w-full h-80 p-8 bg-mus-orange flex flex-col items-center
                    
                    ">
                        <span className="w-40 h-40 rounded-[50%] overflow-hidden mb-2">
                            <Image
                                src="/images/hero/profileHero.webp"
                                alt="imagem de perfil"
                                width={200}
                                height={120}
                                priority // melhora LCP
                            />
                        </span>
                        <span className="mb-1
                        text-[2em]
                        text-white
                        font-bold
                        ">
                            Carlos Alberto</span>
                        <span className="text-[1.4em]
                        text-white
                        opacity-70
                        ">
                            Criador de Conteúdo</span>
                    </div>
                    <HeroCard />
                    <AlertBox />
                    <div className='coin-icon
                w-12
                h-12
                bg-mus-green
                rounded-[50%]
                absolute
                flex-center
                text-mus-black
                text-[2em]
                animate-blink-slow
                top-20
                -left-[184px]
                '>
                        <ImCoinDollar />
                    </div>
                    <div className='heart-icon
                w-12
                h-12
                bg-mus-green
                rounded-[50%]
                absolute
                flex-center
                text-mus-black
                text-[2em]
                animate-blink-slow
                bottom-[340px]
                -right-[184px]
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
            </div>
        </section>
    )
}