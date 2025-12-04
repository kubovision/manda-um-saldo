// components/LaunchOpportunitySection.tsx
'use client';

import React from 'react';
// Ícones do react-icons (usando Bs e Fa como exemplos)
import { FaAward, FaLightbulb, FaEye } from 'react-icons/fa'; 
import { BsCheckCircleFill } from 'react-icons/bs';

// --- Definição dos Dados dos Benefícios ---
const benefitsData = [
    {
        icon: FaAward, // Ícone de Prêmio/Destaque
        title: 'Criador Fundador',
        description: 'Destaque especial e selo exclusivo na plataforma durante os primeiros meses, garantindo visibilidade máxima no lançamento.',
        color: 'text-mus-orange',
    },
    {
        icon: FaLightbulb, // Ícone de Ideia/Influência
        title: 'Influencie o Futuro',
        description: 'Acesso prioritário a novas funcionalidades e um canal direto de feedback para moldar o desenvolvimento da plataforma.',
        color: 'text-indigo-500',
    },
    {
        icon: FaEye, // Ícone de Olho/Visibilidade
        title: 'Veja & Seja Visto',
        description: 'Estabeleça sua presença cedo. A plataforma fará uma promoção extra do seu perfil para atrair os primeiros apoiadores.',
        color: 'text-green-500',
    },
];

// --- Definição dos Dados do Potencial de Ganhos ---
const potentialData = [
    {
        title: 'Para Criadores de Conteúdo',
        scenario: 'Se 100 fãs apoiarem com 500 kz/mês:',
        value: '50.000,00 kz/mês',
        note: 'extra para equipamento ou mais tempo para conteúdo.',
        color: 'border-mus-orange/50 bg-mus-orange/5',
    },
    {
        title: 'Para Profissionais Informais',
        scenario: 'Se 50 clientes gratificarem seus serviços:',
        value: '25.000,00 kz/mês',
        note: 'gratificação pelo bom trabalho realizado.',
        color: 'border-indigo-500/50 bg-indigo-500/5',
    },
];

export default function LaunchOpportunitySection() {
    return (
        <section id="oportunidade-lancamento" className="w-full py-20 md:py-32 bg-mus-accent">
            <div className="container mx-auto px-4 max-w-7xl">
                
                {/* Cabeçalho */}
                <header className="text-center mb-16">
                    <span className="text-lg font-semibold text-mus-orange uppercase tracking-widest flex items-center justify-center gap-2 mb-2">
                        <FaLightbulb size={20} /> Oportunidade de Lançamento
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Seja um dos primeiros criadores
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        Estamos a construir a primeira comunidade angolana de apoio direto a criadores. Junte-se agora e ganhe visibilidade especial.
                    </p>
                </header>

                {/* 1. SEÇÃO DE BENEFÍCIOS (Grid 3 Colunas) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
                    {benefitsData.map((item, index) => {
                        const IconComponent = item.icon; // Componente de ícone dinâmico
                        return (
                            <div
                                key={index}
                                className="p-8 border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 bg-white"
                            >
                                {/* O ÍCONE É RENDERIZADO AQUI, USANDO size e className */}
                                <IconComponent size={36} className={`${item.color} mb-4`} />
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* 2. SEÇÃO DE POTENCIAL DE GANHOS */}
                <div className="text-center mb-16">
                    <h3 className="text-3xl font-bold text-gray-800 mb-8">Veja o potencial:</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {potentialData.map((item, index) => (
                            <div
                                key={index}
                                className={`p-8 border-2 rounded-2xl ${item.color} text-center shadow-lg`}
                            >
                                <h4 className="text-2xl font-extrabold text-gray-900 mb-4">{item.title}</h4>
                                <p className="text-lg text-gray-700 mb-2">{item.scenario}</p>
                                
                                <p className="text-4xl font-black text-mus-orange my-4 leading-none">
                                    {item.value}
                                </p>
                                
                                <p className="text-sm text-gray-600 mt-2">{item.note}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. CTA FINAL DE IMPACTO */}
                <div className="bg-gray-900 p-12 md:p-16 rounded-3xl text-center text-white shadow-2xl">
                    <BsCheckCircleFill size={48} className="text-mus-orange mx-auto mb-4" />
                    <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
                        A cultura de mandar um saldo já existe.
                    </h3>
                    <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
                        Estamos a torná-la profissional. Seja pioneiro e comece a monetizar o seu talento.
                    </p>
                    <button className="bg-mus-orange text-white text-xl font-bold px-10 py-4 rounded-full hover:bg-mus-orange/90 transition duration-300 shadow-lg shadow-mus-orange/50">
                        Quero ser um Criador Fundador
                    </button>
                </div>

            </div>
        </section>
    );
}