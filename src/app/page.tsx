import { NavigationItem } from '@/src/types/index';
import Header from './components/ui/Header'
import Hero from './components/sections/Hero'
import HowWork from './components/sections/HowWork'
import Search from './components/sections/Search'
import Methods from './components/sections/Methods';
import Launch from './components/sections/Launch';
import BottomCTA from './components/sections/BottomCTA';
import Footer from './components/ui/Footer';

const navegation: NavigationItem[] = [
  { name: 'Como Funciona?', href: '#como-funciona' },
  { name: 'Explorar', href: '#explorar' },
  { name: 'FAQ', href: '/perguntas-frequentes' },
  { name: 'Recursos', href: '#recursos' },
];

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Header navegation={navegation} />
      <Hero />
      <HowWork />
      <Search />
      <Methods />
      <Launch />
      <BottomCTA />
      <Footer />
    </main>

  )
}