// components/CardItem.tsx
import { CardItemProps } from '@/types';

// Define as props que este componente receberá


export default function CardItem({ card, rotateCards, index }: CardItemProps) {
    return (
        <div
            key={card.id}
            // Classes de estilo para a transição e layout
            className={`absolute w-[90%] h-94 ${card.bgColor} rounded-xl shadow-card p-12 flex justify-center
            transition-all duration-300 ease-in-out overflow-hidden`}
            style={{
                top: card.top,
                zIndex: card.zIndex,
                // Adiciona escala para dar profundidade visual
                transform: `translateY(-50%) scale(${1 - index * 0.05})`,
                // Diminui a opacidade dos cards de trás
                opacity: index === 0 ? 1 : 0.8 - (index * 0.1)
            }}
            onClick={rotateCards}
        >
            {/* Renderiza o conteúdo (que pode ser JSX complexo) */}
            {card.content}
        </div>
    );
}