import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'
// pages
const Home = lazy(() => import('@/pages/Home/Home'));
const PaymentDetail = lazy(() => import('@/pages/PaymentDetail/PaymentDetail'));
const PlansSection = lazy(() => import('@/pages/PlansSection/PlansSection'));

export const App = () => (
  <Suspense>
    <Routes>
      <Route path='*' element={<Navigate to="/" />} />
      <Route path='/' element={<Home />} />
      <Route path='/plans' element={<PlansSection />}/>
      <Route path='/payment' element={<PaymentDetail />}/>
    </Routes>
  </Suspense>
)