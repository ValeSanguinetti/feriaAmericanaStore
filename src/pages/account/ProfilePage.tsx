import { ProfileHero } from '../../components/profile/ProfileHero'
import { ProfileOverviewGrid } from '../../components/profile/ProfileOverviewGrid'

export default function ProfilePage() {
  return (
    <main className="mx-auto w-full max-w-[1440px] px-5 pt-28 pb-16 md:px-8">
      <ProfileHero />
      <ProfileOverviewGrid />
    </main>
  )
}
