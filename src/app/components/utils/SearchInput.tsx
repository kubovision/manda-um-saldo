'use client';
import { FiSearch, FiUsers } from 'react-icons/fi';

interface SearchInputProps {
    searchTerm: string;
    onSearchChange: (term: string) => void;
    onSearchSubmit: (e: React.FormEvent) => void;
    placeholder: string;
}

export default function SearchInput({
    searchTerm,
    onSearchChange,
    onSearchSubmit,
    placeholder
}: SearchInputProps) {
    const suggestions = ['designer', 'músico', 'programador', 'artista', 'fotógrafo'];

    return (
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
                <form onSubmit={onSearchSubmit} className="p-6">
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <FiSearch className="text-2xl" />
                        </div>

                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                            placeholder={`Exemplo: ${placeholder}`}
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
                                {suggestions.map((tag) => (
                                    <button
                                        key={tag}
                                        type="button"
                                        onClick={() => onSearchChange(tag)}
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

            {/* Quick Stats 
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
            </div>*/}
        </div>
    );
}