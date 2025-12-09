'use client';

import { useState } from 'react';
import SearchHeader from '../utils/SearchHeader';
import SearchResults from '../utils/SearchResults';
import { FiTrendingUp, FiStar, FiUsers } from 'react-icons/fi';

export default function DiscoverCreators() {
    const [activeTab, setActiveTab] = useState('all');

    const [searchResults] = useState([
        { id: 1, username: 'maria_tiktoker', name: 'Maria Silva', category: 'TikTok', followers: '45K' },
        { id: 2, username: 'dj_kamba', name: 'DJ Kamba', category: 'Música', followers: '12K' },
        { id: 3, username: 'designer_angola', name: 'Ana Design', category: 'Design', followers: '8K' },
        { id: 4, username: 'chef_luanda', name: 'Chef Zé', category: 'Culinária', followers: '15K' },
    ]);

    const [featuredCreators] = useState([
        { id: 1, name: 'Criador Populares', icon: <FiTrendingUp />, color: 'text-mus-green', bg: 'bg-orange-50' },
        { id: 2, name: 'Recomendados', icon: <FiStar />, color: 'text-mus-orange', bg: 'bg-orange-50' },
        { id: 3, name: 'Novos na Plataforma', icon: <FiUsers />, color: 'text-mus-green', bg: 'bg-orange-50' },
    ]);

    return (
        <section className="py-40 bg-mus-accent from-white to-mus-light/30">
            <div className="max-w-6xl mx-auto px-4">
                <SearchHeader />

                <SearchResults
                    searchResults={searchResults}
                    featuredCreators={featuredCreators}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />

                {/* Call to Action */}
                <div className="text-2xl md:tex-2xl text-center mt-12">
                    <p className="text-gray-600 mb-6">
                        Não encontras quem procuras? Convida essa pessoa para se juntar à plataforma!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-5 text-mus-black rounded-4xl border-2 border-mus-orange font-semibold 
                        lg:hover:bg-mus-orange lg:hover:text-white transition-colors shadow-lg
                        max-md:bg-mus-orange max-md:text-white
                        ">
                            Convidar um Criador
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}