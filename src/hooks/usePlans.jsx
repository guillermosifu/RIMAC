import { useEffect, useState } from "react";
import { getPlans } from "@/apis/ApisGeneral";
import { useUserStore } from "@/stores/user.store";
import { calculateAgePerson } from "@/utils/calculateAgePerson";

export const usePlans = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const user = useUserStore((state) => state.user);
  const age = calculateAgePerson(user);
  
  useEffect(() => {
    getPlans()
      .then(({ list }) => {
        if (list.length > 0) {
          const newList = list.filter((obj) => obj.age >= age);
          setData(newList);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  return {
    data,
    isLoading,
  };
};
