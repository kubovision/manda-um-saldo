'use client';

import { useState, useEffect } from 'react';
import {
    FiAward,
    FiTrendingUp,
    FiUsers,
    FiStar,
    FiZap,
    FiClock,
    FiCalendar,
    FiDollarSign,
    FiHeart
} from 'react-icons/fi';
import { TbCrown, TbRocket, TbChartLine } from 'react-icons/tb';

interface Benefit {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    bgColor: string;
    duration: string;
    exclusivity: 'founder' | 'early' | 'public';
}

export default function LaunchOpportunity() {
    const [activeBenefit, setActiveBenefit] = useState<number>(1);
    const [fansCount, setFansCount] = useState<number>(100);
    const [clientCount, setClientCount] = useState<number>(50);
    const [amountPerFan, setAmountPerFan] = useState<number>(500);
    const [amountPerClient, setAmountPerClient] = useState<number>(500);
    const [counter, setCounter] = useState({ creators: 0, support: 0, days: 0 });

    const benefits: Benefit[] = [
        {
            id: 1,
            title: "Criador Fundador",
            description: "Destaque especial na plataforma durante os primeiros meses. Badge exclusivo no perfil e prioridade nas buscas.",
            icon: <TbCrown className="text-3xl" />,
            color: "text-yellow-600",
            bgColor: "bg-yellow-50",
            duration: "6 meses",
            exclusivity: 'founder'
        },
        {
            id: 2,
            title: "Influencie o Futuro",
            description: "Participe em pesquisas exclusivas e tenha voz direta no desenvolvimento de novas funcionalidades.",
            icon: <FiTrendingUp className="text-3xl" />,
            color: "text-mus-green",
            bgColor: "bg-green-50",
            duration: "12 meses",
            exclusivity: 'early'
        },
        {
            id: 3,
            title: "Vantagem Competitiva",
            description: "Estabeleça sua presença antes que a plataforma fique lotada. Seja referência na sua categoria.",
            icon: <TbRocket className="text-3xl" />,
            color: "text-mus-orange",
            bgColor: "bg-orange-50",
            duration: "Perpétuo",
            exclusivity: 'founder'
        },
        {
            id: 4,
            title: "Mentoria VIP",
            description: "Acesso a sessões de mentoria com especialistas em monetização e crescimento digital.",
            icon: <FiStar className="text-3xl" />,
            color: "text-purple-600",
            bgColor: "bg-purple-50",
            duration: "3 meses",
            exclusivity: 'early'
        },
        {
            id: 5,
            title: "Taxas Reduzidas",
            description: "Para sempre: 0% de comissão nas suas primeiras 100 transações.",
            icon: <FiDollarSign className="text-3xl" />,
            color: "text-blue-600",
            bgColor: "bg-blue-50",
            duration: "100 transações",
            exclusivity: 'founder'
        },
        {
            id: 6,
            title: "Visibilidade Premium",
            description: "Seu perfil destacado na página inicial e nas redes sociais da plataforma.",
            icon: <TbChartLine className="text-3xl" />,
            color: "text-red-600",
            bgColor: "bg-red-50",
            duration: "1 mês",
            exclusivity: 'early'
        }
    ];

    const exclusivityLabels = {
        founder: { label: "Apenas Fundadores", color: "bg-gradient-to-r from-yellow-500 to-orange-500" },
        early: { label: "Early Adopters", color: "bg-gradient-to-r from-green-500 to-emerald-500" },
        public: { label: "Público Geral", color: "bg-gradient-to-r from-gray-400 to-gray-600" }
    };

    // Calcular potencial de ganho
    const monthlyCreatorIncome = (fansCount * amountPerFan).toLocaleString('pt-AO', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    const monthlyServiceIncome = (clientCount * amountPerClient).toLocaleString('pt-AO', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    // Contadores animados
    useEffect(() => {
        const targets = { creators: 42, support: 127500, days: 28 };
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        let step = 0;
        const timer = setInterval(() => {
            step++;
            const progress = step / steps;

            setCounter({
                creators: Math.floor(targets.creators * progress),
                support: Math.floor(targets.support * progress),
                days: Math.floor(targets.days * progress)
            });

            if (step >= steps) {
                clearInterval(timer);
                setCounter(targets);
            }
        }, interval);

        return () => clearInterval(timer);
    }, []);

    const handleScrollToSignup = () => {
        const element = document.getElementById('signup-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    {/* const activeBenefitData = benefits.find(b => b.id === activeBenefit); */}

    return (
        <section className="py-20 bg-linear-to-br from-gray-900 via-gray-800 to-mus-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-10 w-72 h-72 bg-mus-orange rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-mus-green rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-mus-orange to-orange-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
                        <FiZap className="animate-pulse" />
                        <span>OPORTUNIDADE LIMITADA</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Seja um dos{' '}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-mus-orange to-orange-500">
                            primeiros criadores
                        </span>
                    </h1>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                        Estamos a construir a primeira comunidade angolana de apoio directo a criadores.
                        Junte-se agora e ganhe visibilidade especial durante o lançamento.
                    </p>

                    {/* Stats Counter */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="text-4xl font-bold text-white mb-2">{counter.creators}+</div>
                            <div className="text-gray-300">Criadores Já Cadastrados</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="text-4xl font-bold text-white mb-2">{counter.support.toLocaleString()} Kz</div>
                            <div className="text-gray-300">Em Apoios Recebidos</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="text-4xl font-bold text-white mb-2">{counter.days} dias</div>
                            <div className="text-gray-300">Restantes do Lançamento</div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Benefits */}
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                            <FiAward className="text-yellow-400" />
                            Benefícios Exclusivos
                        </h2>

                        <div className="space-y-4 mb-8">
                            {benefits.map((benefit) => (
                                <div
                                    key={benefit.id}
                                    className={`
                    relative p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer group
                    ${activeBenefit === benefit.id
                                            ? 'bg-white/20 border-white/30 shadow-xl scale-[1.02]'
                                            : 'bg-white/10 border-white/10 hover:bg-white/15 hover:border-white/20'
                                        }
                  `}
                                    onClick={() => setActiveBenefit(benefit.id)}
                                >
                                    {/* Exclusivity Badge */}
                                    <div className="absolute -top-3 left-4">
                                        <span className={`
                      px-3 py-1 rounded-full text-xs font-bold text-white shadow-md
                      ${exclusivityLabels[benefit.exclusivity].color}
                    `}>
                                            {exclusivityLabels[benefit.exclusivity].label}
                                        </span>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className={`
                      w-16 h-16 rounded-xl ${benefit.bgColor} flex items-center justify-center shrink-0
                      ${activeBenefit === benefit.id ? 'scale-110' : ''} transition-transform
                    `}>
                                            <div className={benefit.color}>
                                                {benefit.icon}
                                            </div>
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-xl font-bold text-white">
                                                    {benefit.title}
                                                </h3>
                                                <span className="text-sm text-gray-300 bg-white/10 px-3 py-1 rounded-full">
                                                    {benefit.duration}
                                                </span>
                                            </div>
                                            <p className="text-gray-300">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Active Indicator */}
                                    {activeBenefit === benefit.id && (
                                        <div className="absolute -right-3 top-1/2 transform -translate-y-1/2">
                                            <div className="w-3 h-3 bg-mus-orange rounded-full animate-ping"></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Timeline */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <FiCalendar className="text-mus-orange" />
                                Cronograma do Lançamento
                            </h3>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-linear-to-r from-mus-green to-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold">AGO</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-white font-semibold">Fase Fundadores</div>
                                        <div className="text-gray-300 text-sm">Até {counter.days} de Setembro</div>
                                    </div>
                                    <div className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                                        Ativo
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 opacity-60">
                                    <div className="w-12 h-12 bg-linear-to-r from-gray-600 to-gray-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold">OUT</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-gray-400 font-semibold">Fase Early Access</div>
                                        <div className="text-gray-400 text-sm">Outubro 2024</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 opacity-40">
                                    <div className="w-12 h-12 bg-linear-to-r from-gray-600 to-gray-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold">NOV</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-gray-400 font-semibold">Lançamento Público</div>
                                        <div className="text-gray-400 text-sm">Novembro 2024</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Calculator & CTA */}
                    <div className="sticky top-24">
                        <div className="bg-linear-to-b from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
                            {/* Calculator Header */}
                            <div className="p-8 bg-linear-to-r from-mus-orange/20 to-mus-green/20 border-b border-gray-700">
                                <h2 className="text-2xl font-bold text-white mb-2">
                                    <span className="text-transparent bg-clip-text bg-linear-to-r from-mus-orange to-mus-green">
                                        Veja o potencial:
                                    </span>
                                </h2>
                                <p className="text-gray-300">
                                    Simule quanto poderás ganhar na nossa plataforma
                                </p>
                            </div>

                            <div className="p-8">
                                {/* Calculator 1: Criadores de Conteúdo */}
                                <div className="mb-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                                            <FiUsers className="text-white text-xl" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Para Criadores de Conteúdo</h3>
                                            <p className="text-gray-300 text-sm">Se {fansCount} fãs apoiarem com {amountPerFan} Kz/mês:</p>
                                        </div>
                                    </div>

                                    {/* Sliders */}
                                    <div className="space-y-4 mb-6">
                                        <div>
                                            <div className="flex justify-between text-gray-300 mb-2">
                                                <span>Número de Fãs</span>
                                                <span className="font-bold">{fansCount}</span>
                                            </div>
                                            <input
                                                type="range"
                                                min="10"
                                                max="1000"
                                                step="10"
                                                value={fansCount}
                                                onChange={(e) => setFansCount(parseInt(e.target.value))}
                                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-mus-orange [&::-webkit-slider-thumb]:to-orange-500"
                                            />
                                        </div>

                                        <div>
                                            <div className="flex justify-between text-gray-300 mb-2">
                                                <span>Valor por Fã (Kz)</span>
                                                <span className="font-bold">{amountPerFan.toLocaleString()}</span>
                                            </div>
                                            <input
                                                type="range"
                                                min="100"
                                                max="5000"
                                                step="100"
                                                value={amountPerFan}
                                                onChange={(e) => setAmountPerFan(parseInt(e.target.value))}
                                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-mus-green [&::-webkit-slider-thumb]:to-green-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Result */}
                                    <div className="bg-linear-to-r from-blue-500/20 to-blue-600/20 p-6 rounded-2xl border border-blue-500/30">
                                        <div className="text-center">
                                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                                {monthlyCreatorIncome} Kz
                                            </div>
                                            <div className="text-blue-200">
                                                extra por mês para equipamento ou mais tempo para conteúdo
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Calculator 2: Profissionais Informais */}
                                <div className="mb-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-linear-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                                            <FiHeart className="text-white text-xl" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Para Profissionais Informais</h3>
                                            <p className="text-gray-300 text-sm">Se {clientCount} clientes gratificarem seu serviço:</p>
                                        </div>
                                    </div>

                                    {/* Sliders */}
                                    <div className="space-y-4 mb-6">
                                        <div>
                                            <div className="flex justify-between text-gray-300 mb-2">
                                                <span>Número de Clientes</span>
                                                <span className="font-bold">{clientCount}</span>
                                            </div>
                                            <input
                                                type="range"
                                                min="5"
                                                max="200"
                                                step="5"
                                                value={clientCount}
                                                onChange={(e) => setClientCount(parseInt(e.target.value))}
                                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-purple-500 [&::-webkit-slider-thumb]:to-purple-600"
                                            />
                                        </div>

                                        <div>
                                            <div className="flex justify-between text-gray-300 mb-2">
                                                <span>Valor por Cliente (Kz)</span>
                                                <span className="font-bold">{amountPerClient.toLocaleString()}</span>
                                            </div>
                                            <input
                                                type="range"
                                                min="100"
                                                max="10000"
                                                step="100"
                                                value={amountPerClient}
                                                onChange={(e) => setAmountPerClient(parseInt(e.target.value))}
                                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-pink-500 [&::-webkit-slider-thumb]:to-rose-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Result */}
                                    <div className="bg-linear-to-r from-purple-500/20 to-purple-600/20 p-6 rounded-2xl border border-purple-500/30">
                                        <div className="text-center">
                                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                                {monthlyServiceIncome} Kz
                                            </div>
                                            <div className="text-purple-200">
                                                gratificação pelo bom trabalho realizado
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Quote */}
                                <div className="bg-linear-to-r from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="text-3xl text-mus-orange">💬</div>
                                        <div>
                                            <p className="text-gray-300 italic">
                                                {`"A cultura de "mandar um saldo" já existe. Estamos só a torná-la profissional."`}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <button
                                    onClick={handleScrollToSignup}
                                    className="w-full py-5 bg-linear-to-r from-yellow-500 via-mus-orange to-orange-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
                                >
                                    <div className="flex items-center justify-center gap-3">
                                        <TbCrown className="text-2xl group-hover:scale-110 transition-transform" />
                                        <span>QUERO SER UM CRIADOR FUNDADOR</span>
                                        <FiArrowRight className="text-2xl group-hover:translate-x-2 transition-transform" />
                                    </div>
                                    <div className="text-sm text-white/70 mt-2">
                                        Vagas limitadas • Oferta especial de lançamento
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Founder Count */}
                        <div className="mt-6 p-4 bg-linear-to-r from-mus-green/20 to-green-500/20 rounded-2xl border border-green-500/30">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <FiClock className="text-green-400 text-xl" />
                                    <div>
                                        <div className="text-white font-bold">Vagas de Fundador</div>
                                        <div className="text-green-300 text-sm">Restam apenas 28 vagas</div>
                                    </div>
                                </div>
                                <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-linear-to-r from-green-400 to-emerald-500"
                                        style={{ width: '72%' }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Mini */}
                <div className="mt-16 grid md:grid-cols-3 gap-6">
                    {[
                        {
                            q: "Quanto tempo dura a fase de fundadores?",
                            a: "Até 28 de Setembro de 2024. Depois entraremos em Early Access."
                        },
                        {
                            q: "Preciso pagar para ser fundador?",
                            a: "Não! É completamente gratuito. Apenas benefícios exclusivos."
                        },
                        {
                            q: "Posso perder o status de fundador?",
                            a: "Não! Todos os benefícios são permanentes para quem se registar agora."
                        }
                    ].map((faq, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                            <h4 className="text-white font-bold mb-2">{faq.q}</h4>
                            <p className="text-gray-300">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Adicionar este ícone no topo do arquivo após os outros imports
import { FiArrowRight } from 'react-icons/fi';