import { ButtonProps } from '@/types';
import Link from 'next/link';

export default function Button01({ href, children, className = "" }: ButtonProps) {
    const baseClass = "px-6 py-4 text-[1.6rem] tracking-[0.1rem] text-mus-black no-underline border border-mus-orange rounded-lg transition-all duration-500"
    return (
        <Link href={href} className={`${baseClass} ${className}`}>
            {children}
        </Link>
    )
}