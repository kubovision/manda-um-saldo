'use client';

import { useState, useEffect } from 'react';
import { FiSearch, FiUsers, FiHeart, FiTrendingUp, FiCheck, FiStar } from 'react-icons/fi';
import { TbUsers } from 'react-icons/tb';

export default function DiscoverCreators() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([
        { id: 1, username: 'maria_tiktoker', name: 'Maria Silva', category: 'TikTok', followers: '45K' },
        { id: 2, username: 'dj_kamba', name: 'DJ Kamba', category: 'Música', followers: '12K' },
        { id: 3, username: 'designer_angola', name: 'Ana Design', category: 'Design', followers: '8K' },
        { id: 4, username: 'chef_luanda', name: 'Chef Zé', category: 'Culinária', followers: '15K' },
    ]);

    const [featuredCreators, setFeaturedCreators] = useState([
        { id: 1, name: 'Criador Populares', icon: <FiTrendingUp />, color: 'text-mus-green', bg: 'bg-orange-50' },
        { id: 2, name: 'Recomendados', icon: <FiStar />, color: 'text-mus-orange', bg: 'bg-orange-50' },
        { id: 3, name: 'Novos na Plataforma', icon: <FiUsers />, color: 'text-mus-green', bg: 'bg-orange-50' },
    ]);

    const [activeTab, setActiveTab] = useState('all');

    // Efeito de digitação automática
    const [typedText, setTypedText] = useState('');
    const [typingIndex, setTypingIndex] = useState(0);
    const searchExamples = ['dj_angolano', 'artista_pintura', 'influencer_fitness', 'programador_web'];

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

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Simular busca
        console.log('Buscando:', searchTerm);
    };

    return (
        <section className="py-20 bg-mus-accent from-white to-mus-light/30">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header com animação */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-mus-orange/10 text-mus-orange px-4 py-2 rounded-full text-[1.4em] font-semibold mb-4">
                        <FiSearch className="text-lg" />
                        <span>DESCOBERTA RÁPIDA</span>
                    </div>

                    <h2 className="text-[2.6em] md:text-5xl font-bold mb-6 lg:text-[3.2em]">
                        <span className="text-mus-black">Procura.</span>{' '}
                        <span className="text-mus-orange">Encontra.</span>{' '}
                        <span className="text-mus-black">Apoia.</span>
                    </h2>

                    <p className="text-[1.6em] text-mus-black/60 max-w-2xl mx-auto">
                        Seja um criador famoso ou alguém que conheces pessoalmente,
                        a busca inteligente ajuda-te a encontrá-lo num instante.
                    </p>
                </div>

                {/* Search Section */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="bg-white rounded-2xl shadow-xl p-2 border border-gray-100">
                        {/* URL Preview */}
                        <div className="flex items-center px-6 py-3 border-b border-gray-100">
                            <div className="flex items-center gap-2 text-gray-400">
                                <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                                <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                            </div>
                            <div className="ml-4 text-[1.2em] text-gray-500 font-mono bg-gray-50 px-3 py-1 rounded">
                                mandaumsaldo.ao/<span className="text-mus-orange font-semibold">procurar</span>
                            </div>
                        </div>

                        {/* Search Input */}
                        <form onSubmit={handleSearch} className="p-6">
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <FiSearch className="text-2xl" />
                                </div>

                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder={`Exemplo: ${typedText}`}
                                    className="w-full pl-14 pr-4 py-5 text-[1.5em] rounded-xl border-2 border-gray-200 focus:border-mus-orange focus:ring-2 focus:ring-mus-orange/20 transition-all"
                                />

                                <button
                                    type="submit"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-mus-orange text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
                                >
                                    Procurar
                                </button>
                            </div>

                            {/* Auto-suggestions */}
                            {searchTerm.length > 0 && (
                                <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <FiUsers className="text-gray-400" />
                                        <span className="text-sm text-gray-500">Sugestões:</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {['designer', 'músico', 'programador', 'artista', 'fotógrafo'].map((tag) => (
                                            <button
                                                key={tag}
                                                onClick={() => setSearchTerm(tag)}
                                                className="px-3 py-1 bg-white border border-gray-300 rounded-lg text-sm hover:border-mus-orange hover:text-mus-orange transition-colors"
                                            >
                                                {tag}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Quick Stats */}
                    <div className="flex justify-center gap-8 mt-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-mus-black">500+</div>
                            <div className="text-sm text-gray-500">Criadores</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-mus-orange">10K+</div>
                            <div className="text-sm text-gray-500">Apoios Enviados</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-mus-black">100%</div>
                            <div className="text-sm text-gray-500">Satisfação</div>
                        </div>
                    </div>
                </div>

                {/* Featured Creators */}
                <div className="mb-12">
                    <h3 className="text-[2.6em] font-bold text-center mb-8">Explora por Categoria</h3>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {featuredCreators.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveTab(category.name.toLowerCase())}
                                className={`flex flex-col items-center p-6 rounded-2xl border-2 transition-all ${activeTab === category.name.toLowerCase()
                                        ? 'border-mus-orange bg-white shadow-lg'
                                        : 'border-gray-200 bg-white/50 hover:border-gray-300'
                                    }`}
                            >
                                <div className={`w-18 h-18 rounded-full ${category.bg} flex items-center justify-center mb-4`}>
                                    <div className={`text-4xl ${category.color}`}>{category.icon}</div>
                                </div>
                                <div className="text-[1.6em] font-semibold">{category.name}</div>
                                <div className="text-[1.2em] text-gray-500 mt-1">Ver todos →</div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Search Results Preview */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="p-6 border-b border-gray-100">
                        <h3 className="text-[1.6em] font-bold flex items-center gap-2">
                            <FiUsers className="text-mus-orange" />
                            Resultados da Busca
                        </h3>
                    </div>

                    <div className="divide-y divide-gray-100">
                        {searchResults.map((creator) => (
                            <div
                                key={creator.id}
                                className="p-6 hover:bg-gray-50 transition-colors cursor-pointer group"
                            >
                                <div className="flex flex-col 
                                lg:flex-row lg:justify-between">
                                    <div className="flex items-center gap-4 mb-4 lg:mb-0">
                                        <div className="relative">
                                            <div className="w-18 h-18 bg-linear-to-br from-mus-orange to-mus-green rounded-full flex items-center justify-center text-white text-xl font-bold">
                                                {creator.name.charAt(0)}
                                            </div>
                                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full border-2 border-white flex items-center justify-center">
                                                <FiCheck className="text-mus-green text-xs" />
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h4 className="text-[1.4em] font-semibold group-hover:text-mus-orange transition-colors">
                                                    {creator.name}
                                                </h4>
                                                <span className="px-2 py-1 bg-gray-100 text-lg rounded-full">
                                                    {creator.category}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-500">
                                                <span className="font-mono text-xl">@{creator.username}</span>
                                                <span>•</span>
                                                <span className="flex items-center gap-1">
                                                    <TbUsers className="text-lg" />
                                                    {creator.followers} seguidores
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 ml-12 lg:ml-0">
                                        <button className="flex items-center gap-2 px-4 py-2 text-xl bg-mus-green/10 text-mus-black rounded-xl lg:hover:bg-mus-orange/20 lg:transition-colors">
                                            <FiHeart />
                                            <span>Apoiar</span>
                                        </button>
                                        <button className="px-4 py-2 bg-mus-orange text-xl text-white rounded-xl hover:bg-orange-600 transition-colors">
                                            Ver Perfil
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-6 bg-gray-50 text-center">
                        <button className="text-[1.4em] text-mus-orange font-semibold lg:hover:text-orange-600 transition-colors">
                            Ver todos os resultados →
                        </button>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-[1.4em] text-center mt-12">
                    <p className="text-gray-600 mb-6">
                        Não encontras quem procuras? Convida essa pessoa para se juntar à plataforma!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 text-mus-black rounded-xl border-2 border-mus-orange font-semibold 
                        lg:hover:bg-mus-orange lg:hover:text-white transition-colors shadow-lg">
                            Convidar um Criador
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}