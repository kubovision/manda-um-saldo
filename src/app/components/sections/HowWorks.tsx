'use client';
import Sections from '@/app/components/utils/Sections';
import { PiNumberOneBold, PiNumberTwoBold, PiNumberThreeBold } from "react-icons/pi";
import { GiPayMoney } from "react-icons/gi";
import { BsTools } from "react-icons/bs";


export default function HowWorks() {
    return (
        <section id='como-funciona' className='
        sectionStyle
        '>
            <Sections
            name='Como Funciona'
            title='Tão simples como mandar um saldo para um amigo'
            >
                Dar apoio não precisa ser complicado. Com MUS, basta escolher o valor e enviar. Um pequeno gesto faz uma grande diferença na vida de quem cria.
            </Sections>
            <div className='boxSteps
            w-full
            mt-4
            flex
            justify-center
            max-md:flex-col
            '>
                <div className='boxSteps-item'>
                    <div className='boxSteps-icon
                    bg-mus-accent
                    text-mus-orange
                    
                    '>
                        <BsTools />
                    </div>
                    <h3 className='
                    mb-1
                    text-[2.3em]
                    text-mus-black
                    font-bold
                    '>Para Criadores</h3>
                    <p className='
                    mb-10
                    text-[1.8em]
                    text-mus-black
                    opacity-60
                    '>Começa a receber em minutos</p>
                    <div className='boxSteps-details
                    hover:scale-105
                    '>
                        <div className='details-number
                        flex-center
                        bg-mus-orange 
                        text-white
                        '>
                            <PiNumberOneBold />
                        </div>
                        <div className='details-text
                        '>
                            <p className='
                            text-[1.8em]
                            text-mus-black
                            font-bold
                            '>Criar tua página</p>
                            <p className='
                            text-[1.8em]
                            text-mus-black
                            opacity-60
                            '>Registo em 2 minutos, perfil personalizado com tua foto e bio.</p>
                        </div>
                    </div>
                    <div className='boxSteps-details
                    hover:scale-105
                    '>
                        <div className='details-number
                        flex-center
                        bg-mus-orange 
                        text-white
                        '>
                            <PiNumberTwoBold />
                        </div>
                        <div className='details-text
                        '>
                            <p className='
                            text-[1.8em]
                            text-mus-black
                            font-bold
                            '>Partilha teu link</p>
                            <p className='
                            text-[1.8em]
                            text-mus-black
                            opacity-60
                            '>Coloca na bio do TikTok, Instagram, YouTube e outras redes.</p>
                        </div>
                    </div>
                    <div className='boxSteps-details
                    hover:scale-105
                    '>
                        <div className='details-number
                        flex-center
                        bg-mus-orange 
                        text-white
                        '>
                            <PiNumberThreeBold />
                        </div>
                        <div className='details-text
                        '>
                            <p className='
                            text-[1.8em]
                            text-mus-black
                            font-bold
                            '>Recebe apoios</p>
                            <p className='
                            text-[1.8em]
                            text-mus-black
                            opacity-60
                            '>Directo para tua conta, sem intermediários a reter teu dinheiro.</p>
                        </div>
                    </div>
                </div>
                <div className='boxSteps-item'>
                    <div className='boxSteps-icon
                    bg-mus-accent
                    text-mus-black
                    
                    '>
                        <GiPayMoney />
                    </div>
                    <h3 className='
                    mb-1
                    text-[2.3em]
                    text-mus-black
                    font-bold
                    '>Para Apoiadores</h3>
                    <p className='
                    mb-10
                    text-[1.8em]
                    text-mus-black
                    opacity-60
                    '>Apoia teus criadores favoritos</p>
                    <div className='boxSteps-details
                    hover:scale-105
                    '>
                        <div className='details-number
                        flex-center
                        bg-mus-black 
                        text-white
                        '>
                            <PiNumberOneBold />
                        </div>
                        <div className='details-text
                        '>
                            <p className='
                            text-[1.8em]
                            text-mus-black
                            font-bold
                            '>Encontra um criador</p>
                            <p className='
                            text-[1.8em]
                            text-mus-black
                            opacity-60
                            '>Busca por nome ou usa link directo partilhado pelo criador.</p>
                        </div>
                    </div>
                    <div className='boxSteps-details
                    hover:scale-105
                    '>
                        <div className='details-number
                        flex-center
                        bg-mus-black 
                        text-white
                        '>
                            <PiNumberTwoBold />
                        </div>
                        <div className='details-text
                        '>
                            <p className='
                            text-[1.8em]
                            text-mus-black
                            font-bold
                            '>Escolhe o valor</p>
                            <p className='
                            text-[1.8em]
                            text-mus-black
                            opacity-60
                            '>500, 1000, 2000 Kz ou qualquer valor personalizado. </p>
                        </div>
                    </div>
                    <div className='boxSteps-details
                    hover:scale-105
                    '>
                        <div className='details-number
                        flex-center
                        bg-mus-black 
                        text-white
                        '>
                            <PiNumberThreeBold />
                        </div>
                        <div className='details-text
                        '>
                            <p className='
                            text-[1.8em]
                            text-mus-black
                            font-bold
                            '>Manda o saldo</p>
                            <p className='
                            text-[1.8em]
                            text-mus-black
                            opacity-60
                            '>Paga com Unitel Money, Africell Money ou Multicaixa em segundos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}