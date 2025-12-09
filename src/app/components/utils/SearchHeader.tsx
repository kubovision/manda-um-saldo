'use client';
import SearchInput from './SearchInput';
import { FiSearch } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const searchExamples = ['dj_angolano', 'artista_pintura', 'influencer_fitness', 'programador_web'];

export default function SearchHeader() {
    const [typedText, setTypedText] = useState('');
    const [typingIndex, setTypingIndex] = useState(0);
    const [searchTerm, setSearchTerm] = useState(''); // ← Estado do campo de busca


    useEffect(() => {

        if (typingIndex < searchExamples.length) {
            const example = searchExamples[typingIndex];
            let charIndex = 0;

            const typeWriter = setInterval(() => {
                if (charIndex <= example.length) {
                    setTypedText(example.substring(0, charIndex));
                    charIndex++;
                } else {
                    clearInterval(typeWriter);
                    setTimeout(() => {
                        setTypedText('');
                        setTypingIndex((prev) => (prev + 1) % searchExamples.length);
                    }, 1500);
                }
            }, 100);

            return () => clearInterval(typeWriter);
        }
    }, [typingIndex]);

    // Função de submissão da busca
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Buscando:', searchTerm);
        // Aqui você pode adicionar a lógica real de busca
        // Por exemplo, fazer uma chamada API ou filtrar resultados
    }

    return (
        <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-mus-orange/10 text-mus-orange px-8 py-4 rounded-full text-2xl font-medium">
                <FiSearch size={14} />
                <span>DESCOBERTA RÁPIDA</span>
            </div>

            <h2 className="my-8 text-center text-6xl text-mus-black font-bold leading-20
                    lg:text-8xl/28 lg:w-7xl">
                <span className="text-mus-black">Procura.</span>{' '}
                <span className="text-mus-orange">Encontra.</span>{' '}
                <span className="text-mus-black">Apoia.</span>
            </h2>

            <p className="text-center text-3xl text-mus-black/60 leading-10
                                lg:w-7xl">
                Seja um criador famoso ou alguém que conheces pessoalmente,
                a busca inteligente ajuda-te a encontrá-lo num instante.
            </p>

            {/* Placeholder dinâmico para usar no input */}
            <SearchInput
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                onSearchSubmit={handleSearch}
                placeholder={typedText}
            />
        </div>
    );
}