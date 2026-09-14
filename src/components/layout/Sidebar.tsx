import { Link } from 'react-router-dom'
import { navLinks, phoneNumber } from '../../data/navigation'

interface SidebarProps {
  isOpen: boolean
  onNavigate: () => void
}

export default function Sidebar({ isOpen, onNavigate }: SidebarProps) {
  return (
    <aside
      className={`flex justify-center bg-black/80 flex-col gap-5 items-center z-50 fixed top-0 left-0 w-full h-screen transition-opacity duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      id="sidebar"
    >
      <div className="w-full h-16 flex justify-center items-center border-b border-white/20">
        <div className="flex gap-2 items-center">
          <img src="/assets/icons/water.png" alt="Logo" width={40} height={40} />
          <div>
            <h1 className="font-bold text-xl">پارس پمپ</h1>
            <span className="opacity-50 text-xs">سیم‌پیچی فروش پمپ آب</span>
          </div>
        </div>
      </div>
      <ul className="flex flex-col gap-5 justify-center items-center w-full">
        {navLinks.map((link) => (
          <li key={link.label} className="relative flex flex-col items-center">
            <Link
              to={link.href}
              onClick={onNavigate}
              className="focus:text-primary transition-all duration-300 focus:font-black"
            >
              {link.label}
            </Link>
            <span className="absolute top-full h-0.5 w-5 rounded-full bg-primary" />
          </li>
        ))}
      </ul>
      <div className="mt-8 w-full flex justify-center items-center pointer-events-none">
        <a
          className="flex gap-2 items-center justify-center border border-white rounded-full px-4 py-2"
          href={phoneNumber.href}
        >
          <img src="/assets/icons/phone.png" alt="Phone" width={20} height={20} />
          <p>{phoneNumber.display}</p>
        </a>
      </div>
    </aside>
  )
}
