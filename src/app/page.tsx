import { BreakingNews } from '@/components/BreakingNews';
import GallerySection from '@/components/GallerySection/GallerySection';
import { HeroSection } from '@/components/HeroSection';
import NewsSection from '@/components/NewsSection/NewsSection';
import { NextMatch } from '@/components/NextMatch';
import { RosterSection } from '@/components/RosterSection';
import { SponsorsSection } from '@/components/SponsorsSection';
import TeamValues from '@/components/TeamValues/TeamValues';
import { VideoHero } from '@/components/VideoHero';
import { VideoHeroSection } from '@/components/VideoHeroSection';

export default function Home() {
  return (
    <main style={{ color: 'white' }}>
      {/* <VideoHero />
      <HeroSection /> */}
      <VideoHeroSection />

      <NextMatch />

      <TeamValues />
      <RosterSection />
      <GallerySection />
      <NewsSection />
      <SponsorsSection />
    </main>
  );
}
