'use client';
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
        color: 'text-mus-orange',
    },
    {
        icon: FaEye, // Ícone de Olho/Visibilidade
        title: 'Veja & Seja Visto',
        description: 'Estabeleça sua presença cedo. A plataforma fará uma promoção extra do seu perfil para atrair os primeiros apoiadores.',
        color: 'text-mus-orange',
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
        color: 'border-mus-green bg-mus-green/5',
    },
];

export default function LaunchOpportunitySection() {
    return (
        <section id="launch" className="w-full px-4 py-40 flex flex-col items-center bg-mus-accent
        lg:px-40 "
        >
            <div className="w-full">
                <div className="w-full flex flex-col items-center mb-8">
                    <div className="px-8 py-4 flex-center gap-2 rounded-4xl
                    bg-mus-orange/15 text-mus-orange text-2xl font-medium
                    ">
                        <FaLightbulb size={20} />
                        <h2 className="truncate uppercase">Oportunidade de Lançamento</h2>
                    </div>
                    <h3 className="my-8 text-center text-6xl text-mus-black font-bold leading-20
                    lg:text-8xl/28 lg:w-7xl
                    ">Seja um dos primeiros <br />
                        <span className="text-mus-orange uppercase font-black">criadores</span>
                    </h3>
                    <p className="text-center text-3xl text-mus-black/60 leading-10
                    lg:w-7xl
                    ">Estamos a construir a primeira comunidade angolana de apoio direto a criadores.
                        Junte-se agora e ganhe visibilidade especial.</p>
                </div>
            </div>
            {/* 1. SEÇÃO DE BENEFÍCIOS (Grid 3 Colunas) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20
            lg:max-w-7xl
            ">
                {benefitsData.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <div
                            key={index}
                            className="p-8 border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 bg-white"
                        >
                            <IconComponent size={20} className={`${item.color} mb-4`} />
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">{item.title}</h3>
                            <p className="text-mus-black/60 text-2xl">{item.description}</p>
                        </div>
                    )
                })}
            </div>
            {/* 2. SEÇÃO DE POTENCIAL DE GANHOS */}
            <div className="text-center mb-16 w-full lg:max-w-7xl">
                <h3 className="text-5xl font-bold text-gray-800 mb-8"> Veja o potencial</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {potentialData.map((item, index) => (
                        <div
                            key={index}
                            className={`p-8 border-2 rounded-2xl ${item.color} text-center shadow-lg`}
                        >
                            <h4 className="text-3xl font-extrabold text-gray-900 mb-4">{item.title}</h4>
                            <p className="text-2xl text-gray-700 mb-2">{item.scenario}</p>

                            <p className="text-4xl font-black text-mus-orange my-4 leading-none">
                                {item.value}
                            </p>

                            <p className="text-xl text-gray-600 mt-2">{item.note}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* 3. CTA FINAL DE IMPACTO */}
            <div className="w-full lg:max-w-7xl bg-gray-900 p-12 md:py-28 md:px-16 rounded-3xl text-center text-white shadow-2xl">
                <BsCheckCircleFill size={48} className="text-mus-orange mx-auto mb-4" />
                <h3 className="text-4xl md:text-5xl font-extrabold mb-8">
                    A cultura de mandar um saldo já existe.
                </h3>
                <p className="text-3xl opacity-80 mb-14 max-w-3xl mx-auto">
                    Estamos a torná-la profissional. Seja pioneiro e comece a monetizar o seu talento.
                </p>
                <button className="bg-mus-orange text-white text-2xl font-bold px-10 py-6 rounded-full hover:bg-mus-orange/90 transition duration-300 shadow-lg shadow-mus-orange/50">
                    Quero ser um Criador Fundador
                </button>
            </div>
        </section>
    )
}