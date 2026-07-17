
import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/hero'
import Languages from './component/languages'
import PurposeSection from './component/PurposeSection'
import Features from './component/features'
import Portfolio from './component/portfolio'
import Pricing from './component/pricing'
import Service from './component/service'
import Testimonials from './component/testimonials'
import Newslettersection from './component/newslettersection'
import Footersection from './component/footersection'
import Contact from './component/contact'

function App() {

  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10'></div>
      <div className='overflow-hidden'>
      <Navbar />
      <Hero />
      <Languages />
      <PurposeSection />
      <Features />
      <Portfolio />
      <Pricing />
      <Service />
      <Testimonials />
      <Contact />
      <Newslettersection />
      <Footersection />
      </div>
    
    </main>
  )
}

export default App
