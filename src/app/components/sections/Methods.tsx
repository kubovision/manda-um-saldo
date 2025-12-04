'use client';

import { useState, useEffect } from 'react';
import {
    FiSmartphone,
    FiShield,
    FiZap,
    FiCheckCircle,
    FiClock,
    FiDollarSign,
    FiGlobe
} from 'react-icons/fi';
import {
    TbDeviceMobile,
    TbBuildingBank,
    TbQrcode
} from 'react-icons/tb';

interface PaymentMethod {
    id: number;
    name: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    bgColor: string;
    borderColor: string; // Nova: cor da borda específica
    steps: string[];
    transactionTime: string;
    minAmount: number;
    popularity: number;
    isAvailable: boolean;
}

export default function PaymentMethods() {
    const [activeMethod, setActiveMethod] = useState<number>(1);
    const [isAnimating, setIsAnimating] = useState(false);

    const paymentMethods: PaymentMethod[] = [
        {
            id: 1,
            name: "Unitel Money",
            description: "Aplicativo mais usado em Angola para transações móveis. Rápido, seguro e amplamente aceite.",
            icon: <TbDeviceMobile className="text-4xl" />,
            color: "text-blue-600",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-300", // Específico para borda
            steps: ["Abre Unitel Money", "Seleciona 'Transferir'", "Insere o número do criador", "Confirma o valor"],
            transactionTime: "Instantâneo",
            minAmount: 100,
            popularity: 95,
            isAvailable: true
        },
        {
            id: 2,
            name: "Africell Money",
            description: "Solução de pagamento móvel para clientes Africell. Simples e direto.",
            icon: <FiSmartphone className="text-4xl" />,
            color: "text-green-600",
            bgColor: "bg-green-50",
            borderColor: "border-green-300",
            steps: ["Vai a Africell Money", "Escolhe 'Enviar Dinheiro'", "Digita o contacto", "Autoriza o pagamento"],
            transactionTime: "15-30 segundos",
            minAmount: 100,
            popularity: 85,
            isAvailable: true
        },
        {
            id: 3,
            name: "Multicaixa",
            description: "Referência Multicaixa para pagamento em qualquer terminal ATM em Angola.",
            icon: <TbBuildingBank className="text-4xl" />,
            color: "text-purple-600",
            bgColor: "bg-purple-50",
            borderColor: "border-purple-300",
            steps: ["Gera referência na plataforma", "Vai a qualquer Multicaixa", "Insere a referência", "Paga o valor"],
            transactionTime: "2-5 minutos",
            minAmount: 500,
            popularity: 75,
            isAvailable: true
        },
        {
            id: 4,
            name: "E-kwanza",
            description: "Pagamento rápido e seguro com E-kwanza.",
            icon: <TbBuildingBank className="text-4xl" />,
            color: "text-indigo-600",
            bgColor: "bg-indigo-50",
            borderColor: "border-indigo-300",
            steps: ["Acede ao E-kwanza", "Escolhe 'Pagar'", "Insere os dados", "Confirma transação"],
            transactionTime: "Instantâneo",
            minAmount: 200,
            popularity: 70,
            isAvailable: true
        },
        {
            id: 5,
            name: "Em Breve",
            description: "Estamos a trabalhar para trazer mais opções de pagamento em breve.",
            icon: <TbQrcode className="text-4xl" />,
            color: "text-orange-600",
            bgColor: "bg-orange-50",
            borderColor: "border-orange-300",
            steps: ["Pix Angola", "M-Pesa Angola", "Outras soluções"],
            transactionTime: "Em desenvolvimento",
            minAmount: 0,
            popularity: 0,
            isAvailable: false
        }
    ];

    const features = [
        "Sem Cartões Internacionais",
        "Sem Contas Complexas",
        "Pagamentos em Segundos",
        "Taxas Zero para Apoiadores",
        "Totalmente Seguro",
        "Suporte 24/7"
    ];

    useEffect(() => {
        // Rotação automática dos métodos
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setActiveMethod(prev => (prev % paymentMethods.length) + 1);
                setIsAnimating(false);
            }, 300);
        }, 5000);

        return () => clearInterval(interval);
    }, [paymentMethods.length]);

    const activeMethodData = paymentMethods.find(method => method.id === activeMethod);

    // Mapeamento de cores para as barras de progresso
    const getProgressBarColor = (bgColor: string) => {
        switch (bgColor) {
            case 'bg-blue-50': return 'bg-blue-500';
            case 'bg-green-50': return 'bg-green-500';
            case 'bg-purple-50': return 'bg-purple-500';
            case 'bg-indigo-50': return 'bg-indigo-500';
            case 'bg-orange-50': return 'bg-orange-500';
            default: return 'bg-blue-500';
        }
    };

    return (
        <section className="py-20 bg-linear-to-br from-white via-gray-50 to-mus-light/20 overflow-hidden">
            {/* Container principal com max-width e overflow */}
            <div className="max-w-7xl mx-auto px-4 w-full">
                {/* Header */}
                <div className="text-center mb-16 max-w-full">
                    <div className="inline-flex items-center gap-2 bg-mus-green/10 text-mus-orange px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <FiShield className="text-lg shrink-0" />
                        <span className="truncate">PAGAMENTOS LOCAIS</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 px-2">
                        Apoia usando o método que preferes
                    </h2>

                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                        Disponibilizamos integrações com os métodos mais comuns em Angola,
                        garantindo rapidez, segurança e praticidade em cada contribuição.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Left Column - Payment Methods Cards */}
                    <div className="w-full">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 md:gap-4 mb-8">
                            {paymentMethods.map((method) => (
                                <button
                                    key={method.id}
                                    onClick={() => {
                                        if (isAnimating) return;
                                        setIsAnimating(true);
                                        setTimeout(() => {
                                            setActiveMethod(method.id);
                                            setIsAnimating(false);
                                        }, 200);
                                    }}
                                    className={`
                                        relative p-4 md:p-6 rounded-2xl border-2 transition-all duration-300
                                        w-full min-w-0
                                        ${activeMethod === method.id
                                            ? `${method.bgColor} ${method.borderColor} shadow-lg scale-[1.02]`
                                            : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
                                        }
                                        ${!method.isAvailable ? 'opacity-60' : ''}
                                    `}
                                    disabled={!method.isAvailable || isAnimating}
                                >
                                    {/* Popularity Indicator */}
                                    {method.popularity > 0 && (
                                        <div className="absolute -top-2 -right-2">
                                            <div className="relative">
                                                <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                                                    <span className={`text-xs font-bold ${method.color}`}>
                                                        {method.popularity}%
                                                    </span>
                                                </div>
                                                <div className="absolute inset-0 animate-ping opacity-20 hidden md:block">
                                                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full ${method.bgColor}`}></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex flex-col items-center text-center">
                                        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${method.bgColor} flex items-center justify-center mb-3 md:mb-4`}>
                                            <div className={`${method.color} text-3xl md:text-4xl`}>
                                                {method.icon}
                                            </div>
                                        </div>

                                        <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2 truncate w-full">
                                            {method.name}
                                        </h3>

                                        {method.isAvailable ? (
                                            <div className="flex items-center gap-1 text-green-600 text-xs md:text-sm">
                                                <FiCheckCircle className="shrink-0" />
                                                <span>Disponível</span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-1 text-gray-400 text-xs md:text-sm">
                                                <FiClock className="shrink-0" />
                                                <span>Em breve</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Active Indicator */}
                                    {activeMethod === method.id && (
                                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 hidden md:block">
                                            <div className="w-3 h-3 rotate-45 bg-white border-t-2 border-l-2 border-gray-300"></div>
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Features Grid */}
                        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 w-full">
                            <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 flex items-center gap-2">
                                <FiZap className="text-mus-orange shrink-0" />
                                Porque escolher os nossos métodos?
                            </h4>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 p-2 md:p-3 bg-gray-50 rounded-xl hover:bg-white hover:shadow-sm transition-all min-w-0"
                                    >
                                        <FiCheckCircle className="text-mus-green shrink-0" />
                                        <span className="text-xs md:text-sm text-gray-700 truncate">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Active Method Details */}
                    <div className={`w-full transition-all duration-500 ${isAnimating ? 'opacity-70' : 'opacity-100'}`}>
                        {activeMethodData && (
                            <div className="lg:sticky lg:top-24">
                                <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl overflow-hidden border border-gray-200 w-full">
                                    {/* Method Header */}
                                    <div className={`p-6 md:p-8 ${activeMethodData.bgColor}`}>
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                            <div className="flex items-center gap-3 md:gap-4">
                                                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/80 flex items-center justify-center shrink-0`}>
                                                    <div className={`${activeMethodData.color} text-2xl md:text-3xl`}>
                                                        {activeMethodData.icon}
                                                    </div>
                                                </div>
                                                <div className="min-w-0">
                                                    <h3 className="text-xl md:text-2xl font-bold truncate">
                                                        {activeMethodData.name}
                                                    </h3>
                                                    <div className="flex flex-wrap items-center gap-1 md:gap-2 mt-1">
                                                        <div className="flex items-center gap-1 text-xs md:text-sm">
                                                            <FiClock className="shrink-0" />
                                                            <span>{activeMethodData.transactionTime}</span>
                                                        </div>
                                                        <span className="text-gray-300 hidden md:inline">•</span>
                                                        <div className="flex items-center gap-1 text-xs md:text-sm">
                                                            <FiDollarSign className="shrink-0" />
                                                            <span>Mín: {activeMethodData.minAmount} Kz</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {activeMethodData.isAvailable && (
                                                <div className="px-3 py-2 bg-white rounded-full shadow-md shrink-0">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                        <span className="font-semibold text-green-600 text-sm">Online</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Popularity Bar */}
                                        <div className="mb-2">
                                            <div className="flex justify-between text-xs md:text-sm text-gray-600 mb-1">
                                                <span>Popularidade</span>
                                                <span>{activeMethodData.popularity}%</span>
                                            </div>
                                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full ${getProgressBarColor(activeMethodData.bgColor)} transition-all duration-1000`}
                                                    style={{ width: `${activeMethodData.popularity}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Method Content */}
                                    <div className="p-6 md:p-8">
                                        <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
                                            {activeMethodData.description}
                                        </p>

                                        {/* Steps */}
                                        <div className="mb-6 md:mb-8">
                                            <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 flex items-center gap-2">
                                                <span className={`w-8 h-8 rounded-full ${activeMethodData.bgColor} flex items-center justify-center ${activeMethodData.color} shrink-0`}>
                                                    1-4
                                                </span>
                                                <span>Como funciona</span>
                                            </h4>

                                            <div className="space-y-2 md:space-y-3">
                                                {activeMethodData.steps.map((step, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                                                    >
                                                        <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full ${activeMethodData.bgColor} flex items-center justify-center shrink-0`}>
                                                            <span className={`font-bold ${activeMethodData.color} text-sm md:text-base`}>
                                                                {index + 1}
                                                            </span>
                                                        </div>
                                                        <span className="text-sm md:text-base text-gray-700 wrap-break-word">
                                                            {step}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Quick Stats */}
                                        <div className="grid grid-cols-3 gap-3 md:gap-4 p-3 md:p-4 bg-gray-50 rounded-xl md:rounded-2xl mb-6 md:mb-0">
                                            <div className="text-center">
                                                <div className="text-xl md:text-2xl font-bold text-gray-800">
                                                    {activeMethodData.id === 1 ? '95%' :
                                                        activeMethodData.id === 2 ? '89%' :
                                                            activeMethodData.id === 3 ? '82%' :
                                                                activeMethodData.id === 4 ? '78%' : '0%'}
                                                </div>
                                                <div className="text-xs text-gray-500">Usuários</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-xl md:text-2xl font-bold text-gray-800">
                                                    {activeMethodData.id === 1 ? '< 5s' :
                                                        activeMethodData.id === 2 ? '< 30s' :
                                                            activeMethodData.id === 3 ? '< 5min' :
                                                                activeMethodData.id === 4 ? '< 10s' : '—'}
                                                </div>
                                                <div className="text-xs text-gray-500">Tempo Médio</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-xl md:text-2xl font-bold text-gray-800">
                                                    100%
                                                </div>
                                                <div className="text-xs text-gray-500">Segurança</div>
                                            </div>
                                        </div>

                                        {/* CTA Button */}
                                        <div className="mt-6 md:mt-8">
                                            <button className={`
                                                w-full py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all
                                                disabled:cursor-not-allowed
                                                ${activeMethodData.isAvailable
                                                    ? 'bg-linear-to-r from-mus-orange to-orange-500 text-white hover:shadow-lg active:scale-[0.98]'
                                                    : 'bg-gray-200 text-gray-500'
                                                }
                                            `}
                                                disabled={!activeMethodData.isAvailable}>
                                                {activeMethodData.isAvailable
                                                    ? `Apoiar com ${activeMethodData.name} →`
                                                    : 'Disponível Em Breve'
                                                }
                                            </button>

                                            {activeMethodData.isAvailable && (
                                                <p className="text-center text-gray-500 text-xs md:text-sm mt-2 md:mt-3">
                                                    Sem taxas adicionais • Transação 100% segura
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Comparison Note */}
                                <div className="mt-4 md:mt-6 p-3 md:p-4 bg-linear-to-r from-blue-50 to-green-50 rounded-xl md:rounded-2xl border border-blue-100">
                                    <div className="flex items-center gap-2 md:gap-3">
                                        <FiGlobe className="text-blue-500 text-lg md:text-xl shrink-0" />
                                        <div>
                                            <p className="text-xs md:text-sm text-gray-700">
                                                <span className="font-semibold">Nota:</span> Diferente de plataformas internacionais,
                                                usamos métodos que <span className="text-mus-green font-semibold">90% dos angolanos já conhecem e usam</span>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}