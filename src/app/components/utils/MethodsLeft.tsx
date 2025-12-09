// components/payment-methods/PaymentMethodList.tsx
'use client'
import { useEffect } from "react";
import { PaymentMethod } from '@/src/types';
import { FiCheckCircle, FiClock, FiZap } from "react-icons/fi";
import { TbQrcode } from 'react-icons/tb';
import UnitelMoney from "../../svg/UnitelMoney";
import AfriMoney from "../../svg/AfriMoney";
import Multicaixa from "../../svg/Multicaixa";
import Ekwanza from "../../svg/Ekwanza";
// ... importe outros ícones conforme necessário

interface PaymentMethodListProps {
    methods: PaymentMethod[];
    features: string[];
    activeMethod: number;
    isAnimating: boolean;
    onMethodSelect: (id: number) => void;
    setIsAnimating: (value: boolean) => void;
}

// Função auxiliar para renderizar ícones
// Função auxiliar para converter string em JSX.Element
const getMethodIcon = (iconName: string | React.ReactNode): React.ReactNode => {
    if (typeof iconName !== 'string') return iconName;

    switch (iconName) {
        case 'UnitelMoney': return <UnitelMoney />;
        case 'AfriMoney': return <AfriMoney />;
        case 'Multicaixa': return <Multicaixa />;
        case 'Ekwanza': return <Ekwanza />;
        default: return <TbQrcode className="text-6xl" />;
    }
};

export default function PaymentMethodList({
    methods,
    features,
    activeMethod,
    isAnimating,
    onMethodSelect,
    setIsAnimating
}: PaymentMethodListProps) {

    // Rotação automática (opcional)
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                const nextId = (activeMethod % methods.length) + 1;
                onMethodSelect(nextId);
                setIsAnimating(false);
            }, 300);
        }, 5000);

        return () => clearInterval(interval);
    }, [activeMethod, methods.length, onMethodSelect, setIsAnimating]);

    const handleMethodSelect = (id: number) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            onMethodSelect(id);
            setIsAnimating(false);
        }, 200);
    };

    return (
        <div className="w-full">
            {/* Grid de Métodos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4 mb-8">
                {methods.map((method) => (
                    <button
                        key={method.id}
                        onClick={() => handleMethodSelect(method.id)}
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
                        {/* Indicador de Popularidade */}
                        {method.popularity > 0 && (
                            <div className="absolute -top-3 -right-3">
                                <div className="relative">
                                    <div className="w-14 h-14 md:w-18 md:h-18 bg-white rounded-full flex items-center justify-center shadow-md">
                                        <span className={`text-lg font-bold ${method.color}`}>
                                            {method.popularity}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="flex flex-col items-center text-center">
                            <div className={`w-24 h-24 md:w-28 md:h-28 rounded-full ${method.bgColor} flex items-center justify-center mb-3 md:mb-4`}>
                                <div className={`${method.color} text-3xl md:text-4xl`}>
                                    {getMethodIcon(method.icon)}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-1 md:mb-2 truncate w-full">
                                {method.name}
                            </h3>

                            {method.isAvailable ? (
                                <div className="flex items-center gap-1 text-green-600 text-xl md:text-xl">
                                    <FiCheckCircle className="shrink-0" />
                                    <span>Disponível</span>
                                </div>
                            ) : (
                                <div className="flex items-center gap-1 text-gray-400 text-xl md:text-xl">
                                    <FiClock className="shrink-0" />
                                    <span>Em breve</span>
                                </div>
                            )}
                        </div>

                        {/* Indicador Ativo */}
                        {activeMethod === method.id && (
                            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 hidden md:block">
                                <div className="w-3 h-3 rotate-45 bg-white border-t-2 border-l-2 border-gray-300"></div>
                            </div>
                        )}
                    </button>
                ))}
            </div>

            {/* Grid de Features */}
            <div className="bg-mus-accent rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 w-full">
                <div className="w-full flex items-center gap-4 mb-4">
                    <span className="w-16 h-16 rounded-full bg-mus-orange/16 text-mus-orange flex-center">
                        <FiZap size={20} />
                    </span>
                    <h4 className="text-3xl md:text-3xl font-bold">
                        Porque escolher os nossos métodos?
                    </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 md:gap-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 p-2 md:p-3 bg-gray-50 rounded-xl hover:bg-white hover:shadow-sm transition-all min-w-0"
                        >
                            <FiCheckCircle className="text-mus-orange shrink-0" />
                            <span className="text-2xl md:text-xl text-mus-black truncate">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}