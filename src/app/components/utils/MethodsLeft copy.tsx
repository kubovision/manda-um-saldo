'use client'
import { useState, useEffect } from "react";
import { PaymentMethod } from '@/src/types';
import { TbQrcode } from 'react-icons/tb';
import { FiCheckCircle, FiClock, FiZap } from 'react-icons/fi';
import UnitelMoney from "../../svg/UnitelMoney";
import AfriMoney from "../../svg/AfriMoney";
import Multicaixa from "../../svg/Multicaixa";
import Ekwanza from "../../svg/Ekwanza";
import Airtm from "../../svg/Airtm";
import Binance from "../../svg/Binance"
import Paypay from "../../svg/Paypay"

export default function MethodsLeft() {
    const [activeMethod, setActiveMethod] = useState<number>(1);
    const [isAnimating, setIsAnimating] = useState(false);

    const paymentMethods: PaymentMethod[] = [
        {
            id: 1,
            name: "Unitel Money",
            description: "Aplicativo mais usado em Angola para transações móveis. Rápido, seguro e amplamente aceite.",
            icon: <UnitelMoney />,
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
            name: "AfriMoney",
            description: "Solução de pagamento móvel para clientes Africell. Simples e direto.",
            icon: <AfriMoney />,
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
            icon: <Multicaixa />,
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
            icon: <Ekwanza />,
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
            name: "Paypay",
            description: "Pagamento rápido e seguro com E-kwanza.",
            icon: <Paypay />,
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
            id: 6,
            name: "AirTM",
            description: "Pagamento rápido e seguro com E-kwanza.",
            icon: <Airtm />,
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
            id: 7,
            name: "Binance",
            description: "Pagamento rápido e seguro com E-kwanza.",
            icon: <Binance />,
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
            id: 8,
            name: "Em Breve",
            description: "Estamos a trabalhar para trazer mais opções de pagamento em breve.",
            icon: <TbQrcode className="text-6xl" />,
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

    return (
        <div className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4 mb-8">
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
                            <div className="absolute -top-3 -right-3">
                                <div className="relative">
                                    <div className="w-14 h-14 md:w-18 md:h-18 bg-white rounded-full flex items-center justify-center shadow-md">
                                        <span className={`text-lg font-bold ${method.color}`}>
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
                            <div className={`w-24 h-24 md:w-28 md:h-28 rounded-full ${method.bgColor} flex items-center justify-center mb-3 md:mb-4`}>
                                <div className={`${method.color} text-3xl md:text-4xl`}>
                                    {method.icon}
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
    )
}