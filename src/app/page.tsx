import { Hero } from '@/sections/Hero';
import { Services } from '@/sections/Services';
import { Gallery } from '@/sections/Gallery';
import { Process } from '@/sections/Process';
import { Contact } from '@/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Gallery />
      <Process />
      <Contact />
    </main>
  );
}
