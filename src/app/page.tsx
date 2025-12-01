import Header from './components/ui/Header';
import Hero from './components/sections/Hero';
import HowWorks from './components/sections/HowWorks';
import Search from './components/sections/Search';
import Methods from './components/sections/Methods';
import Launch from './components/sections/Launch';
import FinalCTA from './components/sections/FinalCTA';
import Footer from './components/ui/Footer';
import { NavigationItem } from '@/types';

const navigation: NavigationItem[] = [
  { name: 'Como Funciona?', href: '#como-funciona' },
  { name: 'Explorar', href: '#explorar' },
  { name: 'FAQ', href: '#perguntas' },
  { name: 'Recursos', href: '#recursos' },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header navigation={navigation} />

      {/* Hero Section */}
      <Hero />

      {/* How Works Section */}
      <HowWorks />

      {/* Search Section */}
      <Search />

      {/* Methods Section */}
      <Methods />

      {/* Launch Section */}
      <Launch />

      {/* Final CTA Section */}
      <FinalCTA />

      {/* Footer */}
      <Footer />

    </main>
  );
}