interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  onClick?: () => void
  className?: string
  icon?: React.ReactNode
}

const Button = ({ children, variant = 'primary', onClick, className = '', icon }: ButtonProps) => {
  const base = 'inline-flex items-center gap-2 px-6 py-3 font-inter font-semibold transition-all duration-300 cursor-pointer'

  const variants = {
    primary: 'bg-dorado-principal hover:bg-dorado-claro text-negro-premium',
    outline: 'border border-blanco-hueso text-blanco-hueso hover:border-dorado-principal hover:text-dorado-principal',
  }

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  )
}

export default Button