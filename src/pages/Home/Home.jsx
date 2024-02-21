import { useEffect } from "react";
import { FormRegistration } from "./components/FormRegistration";
import { MainLayout } from "@/layouts/MainLayout";
import { HomeLayout } from "@/layouts/HomeLayout";
import family from "@/assets/imgs/family.png";
import { useUserStore } from "@/stores/user.store";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { isLogged } = useUserStore(state => state.user) 
  const navigate = useNavigate()

  useEffect(() => {
    if (isLogged) {
      navigate("/plans")
    }
  }, [])

  return (
    <HomeLayout>
      <div className="grow w-full flex flex-col justify-center items-center">
        <div className="gradientLeft top-[50rem] -left-[25rem] md:top-[28rem] md:-left-[20rem]" />
        <div className="gradientRight -top-[18rem] -right-[28rem] md:-top-[6rem] md:-right-[25rem]" />
        <MainLayout className="w-full h-full">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 items-center w-full h-full">
            <picture className="hidden md:flex justify-end items-center">
              <img src={family} alt="family" />
            </picture>
            <FormRegistration />
          </section>
        </MainLayout>
      </div>
    </HomeLayout>
  );
};
