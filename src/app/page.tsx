import Hero from '@/components/sections/Hero';
import QuickSearch from '@/components/sections/QuickSearch';
import PromoBanners from '@/components/sections/PromoBanners';
import Destinations from '@/components/sections/Destinations';
import Benefits from '@/components/sections/Benefits';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <QuickSearch />
      <PromoBanners />
      <Destinations />
      <Benefits />
      <Testimonials />
    </>
  );
}

