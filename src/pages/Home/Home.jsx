// layouts
import { MainLayout } from "@/layouts/MainLayout";
// components
import { HomeLayout } from "@/layouts/HomeLayout";
import { RightForm } from "./components/RightForm";
import { LeftImage } from "./components/LeftImage";
// hooks
import { useIsLogged } from "@/hooks/useIsLogged";

export default function Home () {
  useIsLogged()
  
  return (
    <HomeLayout>
      <div className="grow w-full flex flex-col justify-center items-center">
        <div className="gradientLeft top-[50rem] -left-[25rem] md:top-[28rem] md:-left-[20rem]" />
        <div className="gradientRight -top-[18rem] -right-[28rem] md:-top-[6rem] md:-right-[25rem]" />
        <MainLayout className="w-full h-full">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 items-center w-full h-full">
            <LeftImage />
            <RightForm />
          </section>
        </MainLayout>
      </div>
    </HomeLayout>
  );
};
