'use client'
import { useState } from "react";
import MethodsLeft from "../utils/MethodsLeft";
import MethodsRight from "../utils/MethodsRight";
import { FiShield } from "react-icons/fi";
import { TbQrcode } from 'react-icons/tb';

const paymentMethods = [
    {
        id: 1,
        name: "Unitel Money",
        description: "Aplicativo fácil de usar para transações móveis.",
        icon: "UnitelMoney",
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
        icon: "AfriMoney",
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
        icon: "Multicaixa",
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
        icon: "Ekwanza",
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

export default function PaymentMethods() {
    const [activeMethod, setActiveMethod] = useState<number>(1);
    const [isAnimating, setIsAnimating] = useState(false);

    const activeMethodData = paymentMethods.find(m => m.id === activeMethod);

    return (
        <section id="metodos-de-pagamento" className="w-full px-4 py-40 flex flex-col items-center
        lg:px-40
        ">
            <div className="w-full">
                <div className="w-full flex flex-col items-center mb-8">
                    <div className="px-8 py-4 flex-center gap-2 rounded-4xl
                    bg-mus-orange/15 text-mus-orange text-2xl font-medium
                    ">
                        <FiShield size={14} />
                        <h2 className="truncate">PAGAMENTOS LOCAIS</h2>
                    </div>
                    <h3 className="my-8 text-center text-6xl text-mus-black font-bold leading-20
                    lg:text-8xl/28 lg:w-7xl
                    ">Apoia usando o método <br />
                        <span className="text-mus-orange uppercase font-black">que preferes</span>
                    </h3>
                    <p className="text-center text-3xl text-mus-black/60 leading-10
                    lg:w-7xl
                    ">Disponibilizamos integrações com os métodos mais comuns em Angola,
                        garantindo rapidez, segurança e praticidade em cada contribuição.</p>
                </div>
            </div>
            <div className="max-md:w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Lado Esquerdo */}
                <MethodsLeft
                    methods={paymentMethods}
                    features={features}
                    activeMethod={activeMethod}
                    isAnimating={isAnimating}
                    onMethodSelect={setActiveMethod}
                    setIsAnimating={setIsAnimating}
                />

                {/* Lado Direito */}
                <MethodsRight
                    method={activeMethodData!}
                    isAnimating={isAnimating}
                />
            </div>
        </section>
    )
}