import Navbar from '@/components/layout/Navbar'
import Stats from '@/components/layout/Stats'
import Hero from '@/sections/Hero'

const Home = () => {
  return (
    <div className="bg-negro-premium min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
    </div>
  )
}

export default Home