import { LandingFeaturedSection } from '../../components/landing/LandingFeaturedSection'
import { LandingHero } from '../../components/landing/LandingHero'
import { LandingStorySection } from '../../components/landing/LandingStorySection'

export default function LandingPage() {
  return (
    <main className="grid">
      <LandingHero />
      <LandingFeaturedSection />
      <LandingStorySection />
    </main>
  )
}
