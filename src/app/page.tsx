import { Hero } from '@/sections/Hero';
import { Services } from '@/sections/Services';
import { Gallery } from '@/sections/Gallery';
import { Process } from '@/sections/Process';
import { InstagramFeed } from '@/sections/InstagramFeed';
import { Contact } from '@/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Gallery />
      <Process />
      <InstagramFeed />
      <Contact />
    </main>
  );
}
