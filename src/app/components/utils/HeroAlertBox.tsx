import { FaBell } from "react-icons/fa6";

const alertBoxClass = 'w-52 p-3 flex items-center absolute bg-white [box-shadow:var(--shadow-card)] rounded-[0.5rem] z-11'
const alertBoxIconClass = 'w-9 h-9 mr-4 flex-center bg-mus-orange rounded-[50%] text-white text-[1.3em]'
const alertBoxTextClass = 'pl-4 border-l border-black/16'

export default function AlertBox() {
    return (
        <div className="w-full px-8 py-12 flex items-center justify-between
        ">
            <div className={`alertBox
                ${alertBoxClass}
                bottom-[350px] -left-[30%]
                max-md:-left-[30px]
                `}>
                <div className={`alertBoxIcon
                    ${alertBoxIconClass}
                    `}>
                    <FaBell />
                </div>
                <div className={`alertBox-text
                    ${alertBoxTextClass}
                    `}>
                    <p>🎉 Parabéns!</p>
                    <p>+ kz 500</p>
                </div>
            </div>
            <div className={`alertBox
                ${alertBoxClass}
                top-24 -right-[30%]
                max-md:-right-12
                `}>
                <div className={`alertBoxIcon
                    ${alertBoxIconClass}
                    `}>
                    <FaBell />
                </div>
                <div className={`alertBox-text
                    ${alertBoxTextClass}
                    `}>
                    <p>🎉 Parabéns!</p>
                    <p>+ kz 1.000</p>
                </div>
            </div>
            <div className={`alertBox
                ${alertBoxClass}
                top-64 -right-[30%]
                max-md:-right-12
                `}>
                <div className={`alertBoxIcon
                    ${alertBoxIconClass}
                    `}>
                    <FaBell />
                </div>
                <div className={`alertBox-text
                    ${alertBoxTextClass}
                    `}>
                    <p>🎉 Parabéns!</p>
                    <p>+ kz 2.000</p>
                </div>
            </div>
        </div>
    )
}   