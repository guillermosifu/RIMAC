import { useUserStore } from "@/stores/user.store";

export const WelcomeText = () => {
  const user = useUserStore(state => state.user)

  return (
    <div className="w-full md:w-3/4 md:mx-auto md:text-center mb-8">
      <h1 className="md:w-max md:mx-auto text-[28px] md:text-[40px]">
        {user.name} ¿Para quién deseas
      </h1>
      <h1 className="text-[28px] md:text-[40px]">cotizar?</h1>
      <h4 className="font-normal text-[16px] mt-4">
        Selecciona la opción que se ajuste más a tus necesidades.
      </h4>
    </div>
  );
};
