// components/payment-methods/PaymentMethodDetail.tsx
'use client'
import { PaymentMethod } from '@/src/types';
import { FiClock, FiDollarSign, FiGlobe } from "react-icons/fi";
import { TbQrcode } from 'react-icons/tb';
import UnitelMoney from "../../svg/UnitelMoney";
import AfriMoney from "../../svg/AfriMoney";
import Multicaixa from "../../svg/Multicaixa";
import Ekwanza from "../../svg/Ekwanza";
// ... outros ícones

interface PaymentMethodDetailProps {
    method: PaymentMethod;
    isAnimating: boolean;
}

// Helper para ícones
const renderMethodIcon = (icon: string | React.ReactNode): React.ReactNode => {
    if (typeof icon !== 'string') return icon;

    switch (icon) {
        case 'UnitelMoney': return <UnitelMoney />;
        case 'AfriMoney': return <AfriMoney />;
        case 'Multicaixa': return <Multicaixa />;
        case 'Ekwanza': return <Ekwanza />;
        default: return <TbQrcode className="text-6xl" />;
    }
};

// Helper para cor da barra de progresso
const getProgressBarColor = (bgColor: string) => {
    if (bgColor.includes('blue')) return 'bg-blue-500';
    if (bgColor.includes('green')) return 'bg-green-500';
    if (bgColor.includes('purple')) return 'bg-purple-500';
    if (bgColor.includes('indigo')) return 'bg-indigo-500';
    if (bgColor.includes('orange')) return 'bg-orange-500';
    return 'bg-gray-500';
};

export default function PaymentMethodDetail({ method, isAnimating }: PaymentMethodDetailProps) {
    if (!method) return null;

    return (
        <div className={`w-full lg:w-220 transition-all duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
            <div className="lg:sticky lg:top-24">
                {/* Card Principal */}
                <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl overflow-hidden border border-gray-200 w-full">

                    {/* Cabeçalho */}
                    <div className={`p-6 md:p-8 ${method.bgColor}`}>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                            <div className="flex items-center gap-3 md:gap-4">
                                <div className={`w-24 h-24 md:w-26 md:h-26 rounded-full overflow-hidden bg-white/80 flex items-center justify-center shrink-0`}>
                                    <div className={`${method.color} text-2xl md:text-2xl`}>
                                        {renderMethodIcon(method.icon)}
                                    </div>
                                </div>
                                <div className="min-w-0">
                                    <h3 className="text-2xl md:text-3xl font-bold truncate">
                                        {method.name}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-1 md:gap-2 mt-1">
                                        <div className="flex items-center gap-1 text-xl md:text-xl">
                                            <FiClock className="shrink-0" />
                                            <span>{method.transactionTime}</span>
                                        </div>
                                        <span className="text-gray-300 hidden md:inline">•</span>
                                        <div className="flex items-center gap-1 text-xl md:text-xl">
                                            <FiDollarSign className="shrink-0" />
                                            <span>Mín: {method.minAmount} Kz</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {method.isAvailable && (
                                <div className="px-3 py-2 bg-white rounded-full shadow-md shrink-0">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="font-semibold text-green-600 text-xl">Online</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Barra de Popularidade */}
                        <div className="mb-2">
                            <div className="flex justify-between text-xl md:text-2xl text-gray-600 mb-1">
                                <span>Popularidade</span>
                                <span>{method.popularity}%</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className={`h-full ${getProgressBarColor(method.bgColor)} transition-all duration-1000`}
                                    style={{ width: `${method.popularity}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="p-6 md:p-8">
                        <p className="text-gray-600 mb-6 md:mb-8 text-2xl md:text-2xl">
                            {method.description}
                        </p>

                        {/* Passos */}
                        <div className="mb-6 md:mb-8">
                            <h4 className="text-2xl md:text-2xl font-bold mb-3 md:mb-4 flex items-center gap-2">
                                <span className={`w-14 h-14 rounded-full ${method.bgColor} flex items-center justify-center ${method.color} shrink-0`}>
                                    1-4
                                </span>
                                <span>Como funciona</span>
                            </h4>

                            <div className="space-y-2 md:space-y-3">
                                {method.steps.map((step, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                                    >
                                        <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full ${method.bgColor} flex items-center justify-center shrink-0`}>
                                            <span className={`font-bold ${method.color} text-2xl md:text-2xl`}>
                                                {index + 1}
                                            </span>
                                        </div>
                                        <span className="text-2xl md:text-2xl text-gray-700 wrap-break-word">
                                            {step}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Estatísticas Rápidas */}
                        <div className="grid grid-cols-3 gap-3 md:gap-4 p-3 md:p-4 bg-gray-50 rounded-xl md:rounded-2xl mb-6 md:mb-0">
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-gray-800">
                                    {method.id === 1 ? '95%' :
                                        method.id === 2 ? '89%' :
                                            method.id === 3 ? '82%' :
                                                method.id === 4 ? '78%' : '0%'}
                                </div>
                                <div className="text-lg text-gray-500">Usuários</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-gray-800">
                                    {method.id === 1 ? '< 5s' :
                                        method.id === 2 ? '< 30s' :
                                            method.id === 3 ? '< 5min' :
                                                method.id === 4 ? '< 10s' : '—'}
                                </div>
                                <div className="text-lg text-gray-500">Tempo Médio</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-gray-800">
                                    100%
                                </div>
                                <div className="text-lg text-gray-500">Segurança</div>
                            </div>
                        </div>

                        {/* Botão CTA */}
                        <div className="mt-6 md:mt-8">
                            <button className={`
                            w-full py-4 md:py-4 rounded-xl font-bold text-xl md:text-2xl transition-all
                            disabled:cursor-not-allowed
                            ${method.isAvailable
                                    ? 'bg-linear-to-r from-mus-orange to-orange-500 text-white hover:shadow-lg active:scale-[0.98]'
                                    : 'bg-gray-200 text-gray-500'
                                }
                            `}
                                disabled={!method.isAvailable}>
                                {method.isAvailable
                                    ? `Apoiar com ${method.name} →`
                                    : 'Disponível Em Breve'
                                }
                            </button>

                            {method.isAvailable && (
                                <p className="text-center text-gray-500 text-xl md:text-xl mt-2 md:mt-3">
                                    Sem taxas adicionais • Transação 100% segura
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Nota de Comparação */}
                <div className="mt-4 md:mt-6 p-3 md:p-4 bg-linear-to-r from-blue-50 to-green-50 rounded-xl md:rounded-2xl border border-blue-100">
                    <div className="flex flex-col  gap-2 md:flex-row md:items-center md:gap-6">
                        <FiGlobe className="text-blue-500 text-3xl md:text-5xl shrink-0" />
                        <div>
                            <p className="text-2xl md:text-2xl text-gray-700">
                                <span className="font-semibold">Nota:</span> Diferente de plataformas internacionais,
                                usamos métodos que <span className="text-mus-orange font-semibold">90% dos angolanos já conhecem e usam</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}