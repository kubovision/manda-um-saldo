'use client'
import Link from "next/link"
import Image from "next/image"
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaBolt } from "react-icons/fa6";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import { ImCoinDollar } from "react-icons/im";
import HeroCard from "../utils/HeroCards";
import HeroAlertBox from "../utils/HeroAlertBox";

export default function Hero() {
    return (
        <section className="w-full h-320 relative overflow-hidden
        bg-[url(/images/Hero/bgdHero-01.webp)] bg-center bg-cover bg-no-repeat
        hero-section lg:h-screen tablet-only:height
        ">
            <div className="w-full mt-45">
                <h1 className="
                text-center text-[4em] font-bold text-mus-black
                lg:text-[7em] lg:leading-tight
                ">
                    Recebe apoio dos teus fãs <br />
                    <span className='
                    text-mus-orange uppercase font-black'>
                        como nunca!
                    </span>
                </h1>
                <div className="w-full mt-8 flex-center gap-6">
                    <Link href="/criar-pagina" className="btn bg-mus-orange text-white
                    lg:hover:translate-y-0.5
                    ">
                        Criar Minha Página
                    </Link>
                    <Link href="/" className="btn
                    lg:hover:bg-mus-orange lg:hover:text-white lg:hover:translate-y-0.5
                    ">
                        Mandar um Saldo
                    </Link>
                </div>
                <p className="mt-6 text-xl text-center text-mus-black opacity-60">
                    Sem taxas, sem compilcações e leva apenas alguns minutos.
                </p>
            </div>
            <div className="w-full mt-10 flex justify-center">
                <div className="phoneContainer w-lg h-230 bg-white rounded-[4rem] border-12 border-black relative
                animate-move-up-down shadow-phone-hero phoneButton
                ">
                    <span className="phoneComponent01"></span>
                    <span className="phoneComponent02"></span>
                    <div className="w-full h-32 flex items-end justify-between px-4 pb-6
                    ">
                        <Image
                            src="/images/logo-small_transp.webp"
                            width={35}
                            height={120}
                            alt="Manda Um Saldo - Phone"
                            priority
                        />
                        <div className="flex items-center gap-4">
                            <span className="px-6 py-3 bg-mus-orange rounded-4xl text-white text-xl
                            ">Criar Página</span>
                            <HiOutlineMenuAlt1 className='text-[3rem] text-mus-black-500' />
                        </div>
                    </div>
                    <div className="w-full h-80 p-8 bg-mus-orange flex flex-col items-center
                    ">
                        <span className="w-40 h-40 rounded-full overflow-hidden mb-4">
                            <Image
                                src="/images/hero/profileHero.webp"
                                width={200}
                                height={120}
                                alt="Manda Um Saldo - Phone"
                                priority
                                className="phoneImage"
                            />
                        </span>
                        <span className="mb-2 text-3xl font-bold text-white
                        ">Carlos Alberto</span>
                        <span className="text-2xl text-white opacity-70
                        ">Criador de Conteúdo</span>
                    </div>
                    <HeroCard />
                    <HeroAlertBox />
                    <div className='coin-icon w-12 h-12 flex-center rounded-full
                    bg-mus-green text-mus-black text-[2em] animate-blink-slow
                    absolute top-20 -left-[184px]
                    '>
                        <ImCoinDollar />
                    </div>
                    <div className='heart-icon w-12 h-12 flex-center rounded-full
                    bg-mus-green text-mus-black text-[2em] animate-blink-slow
                    absolute bottom-[340px] -right-[184px] 
                    '>
                        <BsFillBalloonHeartFill />
                    </div>
                    <div className='bolt-icon w-12 h-12 flex-center rounded-full
                    bg-mus-orange text-white text-[1.3em] animate-move-up-down-fast
                    absolute -top-[22px] -right-[84px]
                    '>
                        <FaBolt />
                    </div>
                </div>
            </div>
        </section>
    )
}