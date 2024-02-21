import { Link } from 'react-router-dom'
import { PhoneIcon } from '@/assets/icons/PhoneIcon'
import logo from '@/assets/imgs/logo.png'
import { MainLayout } from '@/layouts/MainLayout'

export const Navbar = () => (
  <section className='w-full py-4 px-5 md:px-0'>
    <MainLayout className="flex justify-between items-center">
      <Link to="/">
        <img src={logo} alt="logo" className='w-full h-full' />
      </Link>
      <div className='flex gap-4 items-center'>
        <p className='hidden md:block'>¡Compra por este medio!</p>
        <span className='flex gap-1 items-center'>
          <PhoneIcon />
          <h3>{`(01) 411 6001`}</h3>
        </span>

      </div>
    </MainLayout>
  </section>
)