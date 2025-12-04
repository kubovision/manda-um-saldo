import React from "react";
export interface NavigationItem {
  name: string;
  href: string;
}

export interface HeaderProps {
  navigation: NavigationItem[];
}

export interface ButtonProps {
  href: string
  className?: string
  children: React.ReactNode
}

export interface SectionProps {
  name: string
  title: string
  children: React.ReactNode
  className?: string
}

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