const Home = () => {
  return (
    <div className="min-h-screen bg-negro-premium flex flex-col items-center justify-center gap-6">
      <h1 className="font-cormorant text-6xl text-dorado-principal">
        Contaduría Premium
      </h1>
      <p className="font-inter text-blanco-hueso text-lg">
        Servicios contables de alto nivel
      </p>
      <button className="bg-dorado-principal hover:bg-dorado-claro text-negro-premium font-inter font-semibold px-8 py-3 transition-colors duration-300">
        Conoce más
      </button>
    </div>
  )
}

export default Home