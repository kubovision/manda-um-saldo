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