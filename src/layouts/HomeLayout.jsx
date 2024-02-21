import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { Outlet } from 'react-router-dom'

export const HomeLayout = ({ children }) => {
  return (
    <section className='flex flex-col min-h-screen mx-auto'>
      <Navbar />
      {children}
      <Footer />
    </section>
  )
}
