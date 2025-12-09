'use client';

import { FiUsers, FiHeart, FiCheck } from 'react-icons/fi';
import { TbUsers } from 'react-icons/tb';

interface Creator {
    id: number;
    username: string;
    name: string;
    category: string;
    followers: string;
}

interface Category {
    id: number;
    name: string;
    icon: React.ReactNode;
    color: string;
    bg: string;
}

interface SearchResultsProps {
    searchResults: Creator[];
    featuredCreators: Category[];
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export default function SearchResults({
    searchResults,
    featuredCreators,
    activeTab,
    onTabChange
}: SearchResultsProps) {
    return (
        <>
            {/* Featured Creators */}
            <div className="mb-12">
                <h3 className="text-[2.6em] lg:text-5xl font-bold text-center mb-8">Explora por Categoria</h3>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {featuredCreators.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => onTabChange(category.name.toLowerCase())}
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
                            <div className="flex flex-col lg:flex-row lg:justify-between">
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
        </>
    );
}