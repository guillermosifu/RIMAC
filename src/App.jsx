import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { PaymentDetail } from './pages/PaymentDetail/PaymentDetail'
import { PlansSection } from './pages/PlansSection/PlansSection'

export const App = () =>  (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/plans' element={<PlansSection />}/>
    <Route path='/payment' element={<PaymentDetail />}/>
  </Routes>
)