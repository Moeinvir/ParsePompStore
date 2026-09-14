import { Link } from 'react-router-dom'
import { navLinks, phoneNumber } from '../../data/navigation'
import HamburgerButton from './HamburgerButton'

interface NavbarProps {
  isMenuOpen: boolean
  onToggleMenu: () => void
}

export default function Navbar({ isMenuOpen, onToggleMenu }: NavbarProps) {
  return (
    <section className="w-full flex">
      <section className="flex flex-col w-full">
        <nav className="fixed md:static top-0 left-0 w-full h-16 flex flex-row-reverse md:flex-row justify-between items-center px-4 bg-linear-to-b from-black via-black/90 to-transparent z-50">
          <section className="h-full flex justify-center items-center">
            <div className="flex gap-2 items-center flex-row-reverse md:flex-row text-left md:text-right">
              <img src="/assets/icons/water.png" alt="Logo" width={40} height={40} />
              <div>
                <h1 className="font-bold text-xl">پارس پمپ</h1>
                <span className="opacity-50 text-xs">سیم‌پیچی فروش پمپ آب</span>
              </div>
            </div>
          </section>

          <section className="h-full flex">
            <ul className="gap-8 text-white h-full justify-center relative hidden md:flex">
              {navLinks.map((link) => (
                <li
                  key={link.label}
                  className="group cursor-pointer h-full flex items-center hover:text-primary relative"
                >
                  <Link to={link.href}>{link.label}</Link>
                  <span className="absolute left-0 top-4/5 h-0.75 w-full rounded-full bg-primary opacity-0 transition-all duration-300 group-hover:opacity-100" />
                </li>
              ))}
            </ul>
          </section>

          <section className="h-full hidden justify-center items-center md:flex">
            <a
              className="flex gap-2 items-center justify-center border border-white rounded-full px-4 py-2"
              href={phoneNumber.href}
            >
              <img src="/assets/icons/phone.png" alt="Phone" width={20} height={20} />
              <p>{phoneNumber.display}</p>
            </a>
          </section>

          <HamburgerButton isOpen={isMenuOpen} onClick={onToggleMenu} />
        </nav>
      </section>
    </section>
  )
}
