'use client';
import Sections from '@/app/components/utils/Sections';
import { RiVipCrownFill } from "react-icons/ri";
import { VscLightbulbSparkle } from "react-icons/vsc";
import { LuScanEye } from "react-icons/lu";

export default function Launch() {
    return (
        <section id='lancamento' className='
        sectionStyle
        '>
            <Sections
                name='Oportunidade de Lançamento'
                title='Seja um dos primeiros criadores'
            >
                Estamos a construir a primeira comunidade angolana de apoio directo a criadores.
                Junte-se agora e ganhe visibilidade especial.
            </Sections>
            <div className='launchContainer
            w-full
            flex
            items-center
            justify-around
            flex-wrap
            gap-4
            mt-20
            '>
                <div className="lauchCard
                border-b border-[rgba(50,50,93,0.25)]
                pb-15
                w-[calc((100%/3)-1rem)]
                min-w-140
                h-60
                ">
                    <RiVipCrownFill className='
                    text-[3.5em]
                    text-mus-orange
                    mb-4
                    '/>
                    <h3 className='
                    text-[1.8em]
                    text-mus-black
                    font-bold
                    '>Criador Fundador</h3>
                    <p className='
                    text-[1.5em]
                    text-mus-black
                    opacity-60
                    '>Destaque especial na plataforma durante os primeiros meses</p>
                </div>
                <div className="lauchCard
                border-b border-[rgba(50,50,93,0.25)]
                pb-15
                w-[calc((100%/3)-1rem)]
                min-w-140
                h-60
                ">
                    <VscLightbulbSparkle className='
                    text-[3.5em]
                    text-mus-orange
                    mb-4
                    '/>
                    <h3 className='
                    text-[1.8em]
                    text-mus-black
                    font-bold
                    '>Influencie o Futuro</h3>
                    <p className='
                    text-[1.5em]
                    text-mus-black
                    opacity-60
                    '>Ajude a moldar a plataforma com seu feedback</p>
                </div>
                <div className="lauchCard
                border-b border-[rgba(50,50,93,0.25)]
                pb-15
                w-[calc((100%/3)-1rem)]
                min-w-140
                h-60
                ">
                    <LuScanEye className='
                    text-[3.5em]
                    text-mus-orange
                    mb-4
                    '/>
                    <h3 className='
                    text-[1.8em]
                    text-mus-black
                    font-bold
                    '>Veja Visto</h3>
                    <p className='
                    text-[1.5em]
                    text-mus-black
                    opacity-60
                    '>Estabeleça sua presença e deixe todos saberem o que você faz</p>
                </div>
            </div>
            <div className='potencialContainer
            w-full
            py-12
            flex
            flex-col
            items-center
            '>
                <h3 className='
                    text-[2.5em] 
                    text-mus-black 
                    font-bold
                    '>Veja o potencial:</h3>
                <div className='potencialBox
                w-full
                flex
                items-center
                justify-center
                flex-wrap
                gap-4
                rounded-3xl
                [box-shadow:rgba(50,50,93,0.25)_0px_2px_5px_-1px,rgba(0,0,0,0.3)_0px_1px_3px_-1px]
                p-8
                '>
                    <div className='potencialItem
                    w-[49%]
                    min-w-140
                    flex
                    flex-col
                    items-center
                    '>
                        <h4 className='
                        text-[1.8em]
                        text-mus-orange
                        font-bold
                        '>Para Criadores de Conteúdo</h4>
                        <p className='
                        text-[1.5em]
                        text-mus-black
                        opacity-60
                        mb-8
                        '>Se 100 fãs apoiarem com 500 kz/mês:</p>
                        <div className='potencialValue
                        w-full
                        flex
                        flex-col
                        items-center
                        '>
                            <span className='
                            text-[1.8em]
                            text-mus-orange
                            font-bold
                            '>50.000,00 kz/mês</span>
                            <p className='
                            text-[1.5em]
                            text-mus-black
                            opacity-60
                            '>extra para equipamento ou mais tempo para conteúdo.</p>
                        </div>
                    </div>
                    <div className='potencialItem
                    w-[49%]
                    min-w-140
                    flex
                    flex-col
                    items-center
                    '>
                        <h4 className='
                        text-[1.8em]
                        text-mus-orange
                        font-bold
                        '>Para Profissionais Informais</h4>
                        <p className='
                        text-[1.5em]
                        text-mus-black
                        opacity-60
                        mb-8
                        '>Se 50 clientes gratificarem seu serviços:</p>
                        <div className='potencialValue
                        w-full
                        flex
                        flex-col
                        items-center
                        '>
                            <span className='
                            text-[1.8em]
                            text-mus-orange
                            font-bold
                            '>25.000,00 kz/mês</span>
                            <p className='
                            text-[1.5em]
                            text-mus-black
                            opacity-60
                            '>gratificação pelo bom trabalho.</p>
                        </div>
                    </div>
                </div>
                <p className='
                mt-8
                text-[1.8em]
                text-mus-black
                '>{`A cultura de "mandar um saldo" já existe. Estamos só a torná-la profissional.`}</p>
            </div>
        </section>
    )
}