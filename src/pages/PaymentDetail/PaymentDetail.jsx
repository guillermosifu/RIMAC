// components
import { ReturnButton } from "@/components/ReturnButton";
import { Description } from "./components/Description";
import { Steps } from "@/components/Steps";
// layouts
import { WhiteCard } from "@/layouts/WhiteCard";
import { MainLayout } from "@/layouts/MainLayout";
import { HomeLayout } from "@/layouts/HomeLayout";
// stores
import { useUserStore } from "@/stores/user.store";
// wrappers
import { PrivateRouter } from "@/wrappers/PrivateRouter";
import { IsPlanSelected } from "@/wrappers/IsPlanSelected";
// assets
import { UsersIcon } from "@/assets/icons/UsersIcon";

export default function PaymentDetail() {
  const user = useUserStore((state) => state.user);
  const { name, price } = user.selectedPlan || {};

  return (
    <PrivateRouter>
      <IsPlanSelected>
        <HomeLayout>
          <div className="w-full grow bg-neutrals-400 font-lato flex flex-col">
            <Steps 
              currentStep={1} 
              steps={["Planes y coberturas", "Resumen"]} 
            />
            <article className="flex flex-col justify-center items-center p-8 grow">
              <MainLayout
                style={{
                  width: "100%",
                  maxWidth: "1300px",
                  padding: "2.5rem 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2.3rem",
                }}
              >
                <div className="w-full">
                  <ReturnButton />
                </div>

                <h1 className="w-full font-bold text-[40px] text-center md:text-start">
                  Resumen del seguro
                </h1>

                <WhiteCard className="w-full py-6 px-8">
                  <h6 className="uppercase mb-2 font-black">
                    Precios calculados para:
                  </h6>

                  <span className="flex gap-2 items-center capitalize">
                    <UsersIcon />
                    <h2 className="font-bold">
                      {user?.name} {user?.lastName}
                    </h2>
                  </span>
                  <div className="w-full h-[1px] bg-neutrals-300 my-4" />

                  <div className="flex flex-col gap-3">
                    <Description
                      title="Responsable del pago"
                      info={`DNI: ${user.document}`}
                      subInfo={`Celular: ${user.mobile}`}
                    />
                    <Description
                      title="Plan elegido"
                      info={name}
                      subInfo={`Costo del Plan: $${price} al mes`}
                    />
                  </div>
                </WhiteCard>
              </MainLayout>
            </article>
          </div>
        </HomeLayout>
      </IsPlanSelected>
    </PrivateRouter>
  );
}
