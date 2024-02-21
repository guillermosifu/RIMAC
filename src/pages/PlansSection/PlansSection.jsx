import { CardDescription } from "@/pages/PlansSection/components/CardDescription"
import { CardRadio } from "@/pages/PlansSection/components/CardRadio"
import { ReturnButton } from "@/components/ReturnButton"
import { Steps } from "@/components/Steps"
import { usePlans } from "@/hooks/usePlans"
import { HomeLayout } from "@/layouts/HomeLayout"
import { MainLayout } from "@/layouts/MainLayout"
import { useUserStore } from "@/stores/user.store"
import { PrivateRouter } from "@/wrappers/PrivateRouter"
import { RadioGroup } from "@mui/material"

export const PlansSection = () => {
  const user = useUserStore(state => state.user)
  const setUser = useUserStore(state => state.setUser)
  const resetUser = useUserStore(state => state.resetUser)

  const { data } = usePlans()
  
  const handleChange = ({ target: { value, name }}) => {
    setUser({ [name]: value })
  }

  return (
    <PrivateRouter>
      <HomeLayout>
        <div className="grow w-full h-full font-lato bg-neutrals-400">
          <Steps steps={["Planes y coberturas", "Resumen"]} currentStep={0} />
          <MainLayout style={{
            maxWidth: "1300px",
            padding: "2.5rem 0"
          }}>
            <ReturnButton onClick={resetUser} to="/plans" />

            <section className="md:w-max max-w-[1300px] p-6 md:p-0 mx-auto flex flex-col justify-center items-center md:mt-20 gap-8">
              <span className="w-full md:w-3/4 md:mx-auto md:text-center mb-8">
                <h1 className="md:w-max md:mx-auto text-[28px] md:text-[40px]">
                  {user.name} ¿Para quién deseas 
                </h1>
                <h1 className="text-[28px] md:text-[40px]">
                  cotizar?
                </h1>
                <h4 className="font-normal text-[16px] mt-4">
                  Selecciona la opción que se ajuste más a tus necesidades.
                </h4>
              </span>
              <RadioGroup onChange={handleChange} value={user.plan} name="plan">
                <div className="flex flex-col md:flex-row gap-7">
                  <CardRadio 
                    title="Para mí" 
                    description="Cotiza tu seguro de salud y agrega familiares si así lo deseas." 
                    icon="protection" 
                    value="personal"
                    group={user.plan}
                    name="plan"
                    hola="asdasd"
                    />
                  <CardRadio 
                    title="Para alguien más" 
                    description="Realiza una cotización para uno de tus familiares o cualquier persona." 
                    icon="healing" 
                    value="familiar"
                    group={user.plan}
                    name="plan"
                    hola="asdasd"
                  />
                </div>
              </RadioGroup>

              <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data && data.length > 0 && user.plan && data.map((plan, index) => (
                  <CardDescription 
                    key={index}
                    icon={index % 2 === 0 ? "home" : "hospital"} 
                    isRecomended={index % 2 !== 0}
                    data={plan}
                  />
                ))}
              </article>
            </section>
          </MainLayout>
        </div>
      </HomeLayout>
    </PrivateRouter>
  )
}
