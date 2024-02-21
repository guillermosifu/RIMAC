import { Checkbox } from "@/components/Checkbox";

export const TermsAndConditions = ({ register, errors }) => (
  <div>
    <p className="text-start text-sm mt-1 text-red-500 pl-2 col-span-2">
      {errors?.notValid?.message}
    </p>
    <Checkbox
      label="Acepto la Política de Privacidad"
      name="politics"
      register={register}
      errors={errors}
    />
    <Checkbox
      label="Acepto la Política Comunicaciones Comerciales"
      name="comunications"
      register={register}
      errors={errors}
    />
    <a className="ml-3">Aplican Términos y Condiciones.</a>
  </div>
);
