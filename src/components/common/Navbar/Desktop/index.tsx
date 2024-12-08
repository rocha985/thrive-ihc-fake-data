import { translation } from '@/utils/internationalization/translation'
import { UserActions } from '../UserActions'
import { NavbarProps } from '../types'

export const DesktopNavbar: React.FC<NavbarProps> = async () => {
  const { raw } = await translation('navbar')

  return (
    <nav className="lg:block hidden bg-neutral sticky top-0 z-30 w-full border-b border-slate-200 bg-neutral-50 px-4 py-3">
      <section className="mx-auto flex w-full max-w-2xl items-center justify-between gap-6 lg:max-w-7xl lg:gap-0">
        <UserActions copy={raw('content')} />
      </section>
    </nav>
  )
}
