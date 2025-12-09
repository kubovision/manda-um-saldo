import { ReactNode } from 'react';
// for header
export interface NavigationItem {
  name: string;
  href: string;
}

export interface NavigationProps {
  items: NavigationItem[];
}

// for how it works section
export interface Card {
  id: number;
  top: string;
  zIndex: number;
  content: React.ReactNode; // Conteúdo a ser exibido
  bgColor: string;
}

export interface CardItemProps {
  card: {
    id: number;
    top: string;
    zIndex: number;
    bgColor: string;
    content: React.ReactNode;
  };
  rotateCards: () => void;
  index: number;
}

// for methods section
export interface PaymentMethod {
  id: number;
  name: string;
  description: string;
  icon: string | ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  steps: string[];
  transactionTime: string;
  minAmount: number;
  popularity: number;
  isAvailable: boolean;
}

export interface MethodDetailsProps {
  method: PaymentMethod;
  isAnimating: boolean;
}

export interface MethodCardProps {
  method: PaymentMethod;
  isActive: boolean;
  isAnimating: boolean;
  onClick: () => void;
}
