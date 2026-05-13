import { MessageCircle, ChevronRight } from 'lucide-react'
import Button from '@/components/ui/Button'

const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-negro-premium flex items-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16">

        {/* Columna izquierda — Texto */}
        <div className="flex flex-col gap-6">

          {/* Título principal */}
          <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-blanco-hueso uppercase">
            Números que{' '}
            <span className="text-dorado-principal">construyen</span>{' '}
            tu mejor decisión.
          </h1>

          {/* Subtítulo */}
          <p className="font-inter text-blanco-hueso/70 text-lg max-w-md leading-relaxed">
            Asesoría contable y financiera personalizada para que tu negocio
            crezca con seguridad y claridad.
          </p>

          {/* Botones */}
          <div className="flex flex-wrap gap-4 mt-2">
            <Button
              variant="primary"
              icon={<MessageCircle size={18} />}
              onClick={() => window.open('https://wa.me/TUNUMERO', '_blank')}
            >
              Hablar por WhatsApp
            </Button>

            <Button
              variant="outline"
              icon={<ChevronRight size={18} />}
            >
              Conoce nuestros servicios
            </Button>
          </div>
        </div>

        {/* Columna derecha — Logo / Imagen */}
        <div className="flex flex-col items-center justify-center gap-4">
          <img
            src="/logo.png"
            alt="Carlos González"
            className="w-72 md:w-96 object-contain drop-shadow-2xl"
          />
          <div className="text-center">
            <p className="font-cormorant text-3xl font-bold text-blanco-hueso tracking-widest uppercase">
              Carlos González
            </p>
            <div className="flex items-center gap-3 mt-1 justify-center">
              <span className="h-px w-10 bg-dorado-principal" />
              <p className="font-inter text-xs text-dorado-principal tracking-widest uppercase">
                Números que construyen tu mejor decisión
              </p>
              <span className="h-px w-10 bg-dorado-principal" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero