// components
import { ReturnButton } from "@/components/ReturnButton";
import { Steps } from "@/components/Steps";
import { WelcomeText } from "./components/WelcomeText";
import { PlanSelection } from "./components/PlanSelection";
import { PlansDescriptions } from "./components/PlansDescriptions";
// layouts
import { BackgroundLayout } from "@/layouts/BackgroundLayout";
import { HomeLayout } from "@/layouts/HomeLayout";
import { MainLayout } from "@/layouts/MainLayout";
// stores
import { useUserStore } from "@/stores/user.store";
// wrappers
import { PrivateRouter } from "@/wrappers/PrivateRouter";

export default function PlansSection() {
  const resetUser = useUserStore((state) => state.resetUser);
  
  return (
    <PrivateRouter>
      <HomeLayout>
        <BackgroundLayout>
          <Steps 
            steps={["Planes y coberturas", "Resumen"]} 
            currentStep={0} 
          />
          <MainLayout
            style={{
              maxWidth: "1300px",
              padding: "2.5rem 0",
            }}
          >
            <ReturnButton 
              to="/plans" 
              onClick={resetUser} 
            />

            <section
              className="max-w-[1300px]  p-6 md:p-0 mx-auto 
              flex flex-col justify-center items-center md:mt-20 gap-8
              "
            >
              <WelcomeText />
              
              <PlanSelection />

              <PlansDescriptions  />
            </section>
          </MainLayout>
        </BackgroundLayout>
      </HomeLayout>
    </PrivateRouter>
  );
}
