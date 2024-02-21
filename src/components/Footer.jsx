import { LogoNegative } from '@/assets/icons/LogoNegative'
import { MainLayout } from '@/layouts/MainLayout'

export const Footer = () => {
  return (
    <div className='w-full bg-black'>
      <MainLayout className='flex flex-col md:flex-row gap-4 justify-between items-center py-8 px-2 md:px-0'>
        <LogoNegative />
        <span className='text-sm font-normal text-[#F8F9FF]'>
          © 2023 RIMAC Seguros y Reaseguros.
        </span>
      </MainLayout>
    </div>
  )
}