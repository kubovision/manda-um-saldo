'use client';
import Sections from '@/app/components/utils/Sections';

export default function Search() {
    return (
        <section id="procurar" className="
        sectionStyle
        bg-mus-accent
        ">
            <Sections
            name='Busca Rápida'
            title='Procura. Encontra. Apoia.'
            >
                Seja um criador famoso ou alguém que conheces pessoalmente, a busca rápida ajuda-te a encontrá-lo num instante.
            </Sections>
            <div className='searchContainer
            w-full
            py-12 px-8
            flex
            items-center
            flex-col
            '>
                <div className="searchBox
                w-[60%]
                h-20
                border border-[rgba(50,50,93,0.25)]
                rounded-lg
                flex
                items-center
                ">
                    <span className='
                    px-4
                    w-60
                    h-full
                    flex
                    items-center
                    text-[1.5em]
                    text-mus-black
                    border-r border-[rgba(50,50,93,0.25)]
                    '>mandaumsaldo.ao/</span>
                    <input type="text" id='quickSearch' placeholder='nome-de-usuario' className='
                    w-full
                    h-full
                    bg-white
                    px-4
                    text-[1.5em]
                    text-mus-black
                    focus:outline-none
                    focus:border-2 border-mus-orange
                    '/>
                </div>
            </div>
        </section>
    )
}