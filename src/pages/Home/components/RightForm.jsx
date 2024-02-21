import { DescriptionHome } from "./DescriptionHome";
import { FormValidate } from "./FormValidate";

export const RightForm = () => (
  <article className="w-full md:w-4/5 xl:w-3/5">
    <DescriptionHome />
    <div className="w-full h-[1px] bg-neutrals-300 my-4 md:hidden " />
    <h5 className="font-bold tracking-[.2px]">
      Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
      asesoría. 100% online.
    </h5>
    <FormValidate />
  </article>
);
