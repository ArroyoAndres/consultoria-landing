import { useState } from 'react'
import { MessageCircle, Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Contacto', href: '#contacto' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('Inicio')

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-negro-premium border-b border-dorado-principal/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Carlos González" className="h-12 w-12 object-contain" />
        </div>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`font-inter text-sm transition-colors duration-200 relative pb-1
                  ${active === link.label
                    ? 'text-blanco-hueso after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-dorado-principal'
                    : 'text-blanco-hueso/60 hover:text-blanco-hueso'
                  }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón WhatsApp desktop */}
        <div className="hidden md:block">
          <Button
            variant="outline"
            icon={<MessageCircle size={16} />}
            onClick={() => window.open('https://wa.me/TUNUMERO', '_blank')}
          >
            WhatsApp
          </Button>
        </div>

        {/* Menú hamburguesa mobile */}
        <button
          className="md:hidden text-blanco-hueso"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú mobile */}
      {isOpen && (
        <div className="md:hidden bg-negro-premium border-t border-dorado-principal/20 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => { setActive(link.label); setIsOpen(false) }}
              className="text-blanco-hueso/80 hover:text-dorado-principal font-inter text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button variant="outline" icon={<MessageCircle size={16} />}>
            WhatsApp
          </Button>
        </div>
      )}
    </nav>
  )
}

export default Navbar