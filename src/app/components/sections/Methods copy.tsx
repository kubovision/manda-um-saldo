'use client'
import MethodsLeft from "../utils/MethodsLeft";
import { FiShield } from "react-icons/fi";

export default function PaymentMethods() {
    return (
        <section id="metodos-de-pagamento" className="w-full px-4 py-20 flex flex-col items-center
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
                <MethodsLeft />
            </div>
        </section>
    )
}