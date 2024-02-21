import { useUserStore } from '@/stores/user.store';
import { useNavigate } from 'react-router-dom';

export const useSelectPlan = ({ data }) => {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();
  
  const calulatePrice = user.plan === "familiar" ? data.price - (5 / 100) * data.price : data.price;

  const handleSelectPlan = () => {
    setUser({ selectedPlan: { ...data, price: calulatePrice } });
    navigate("/payment");
  };

  return {
    handleSelectPlan,
    price: calulatePrice
  }
}
