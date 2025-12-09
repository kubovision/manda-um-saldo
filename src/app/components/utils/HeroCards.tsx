import { FaHandHoldingHeart } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";

const infoBoxClass = 'w-40 flex items-center justify-center'
const infoIconClass = 'w-14 h-14 rounded-[50%] bg-mus-orange text-white text-[1.7em] mr-4 flex-center'

export default function HeroCard() {
    return (
        <div className="w-full px-8 py-12 flex items-center justify-between
        ">
            <div className={infoBoxClass}>
                <div className={infoIconClass}>
                    <FaHandHoldingHeart />
                </div>
                <div>
                    <p className='text-[1.3em] font-700
                    '>520</p>
                    <p className='text-[1.3em] opacity-60
                    '>Apoios</p>
                </div>
            </div>
            <div className={infoBoxClass}>
                <div className={infoIconClass}>
                    <GiReceiveMoney />
                </div>
                <div>
                    <p className='text-[1.3em] font-700
                    '>250k</p>
                    <p className='
                    text-[1.3em] opacity-60
                    '>Recebido</p>
                </div>
            </div>
        </div>
    )
}