import Header from './components/ui/Header';
import Hero from './components/sections/Hero';
import HowWorks from './components/sections/HowWorks';
import { NavigationItem } from '@/types';
import Search from './components/sections/Search';
import Methods from './components/sections/Methods';
import LaunchOpportunitySection from './components/sections/Launch';
import FinalCTA from './components/sections/FinalCTA';
import Footer from './components/ui/Footer';

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

      {/* Hero */}
      <Hero />

      {/* How Works */}
      <HowWorks />

      {/* search */}
      <Search />
      {/* methods */}
      <Methods />

      {/* Launch Opportunity */}
      <LaunchOpportunitySection />

      <FinalCTA />

      <Footer />
      
    </main>
  );
}