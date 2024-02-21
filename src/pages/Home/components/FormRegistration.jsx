import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// components
import { Button } from "@/components/Button";
import { Checkbox } from "@/components/Checkbox";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
// utils
import { yupResolver } from "@hookform/resolvers/yup";
// schemas
import { registrationSchema } from "@/schemas/registrationSchema";
// stores
import { useUserStore } from "@/stores/user.store";
// apis
import { getUser } from "@/apis/ApisGeneral";
// helpers
import { userData } from "@/helpers/userData";
import family from "@/assets/imgs/family.png";

const initialValues = {
  typeDocument: "DNI",
  politics: false,
  comunications: false,
  document: "",
  mobile: ""
};

export const FormRegistration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();
  const {
    handleSubmit,
    setError,
    control,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = ({ notValid, ...values }) => {
    const findUser = userData.find(
      ({ document, typeDocument, mobile }) =>
        document === values.document &&
        typeDocument === values.typeDocument &&
        mobile === values.mobile
    );

    if (findUser) {
      setIsLoading(true);

      getUser()
        .then((data) => {
          setUser({ ...values, ...data, isLogged: true });
          navigate("/plans");
        })
        .finally(() => setIsLoading(false));
    } else {
      setError("notValid", { type: "custom", message: "No existe el usuario" });
    }
  };

  return (
    <span className="w-full">
      <article className="w-full md:w-4/5 xl:w-3/5">
        <div className="grid grid-cols-[60%_auto] md:block gap-6">
          <div>
            <span className="block w-max bg-gradient-to-r from-[#00F4E2] from-10% to-[#00FF7F] font-bold rounded-md tracking-wide px-2 py-1">
              Seguro Salud Flexible
            </span>
            <h1>Creado para ti y tu familia</h1>
          </div>
          <picture className="flex md:hidden justify-center items-center">
            <img
              src={family}
              alt="family"
              className="w-full h-full object-contain"
            />
          </picture>
        </div>
        <div className="w-full h-[1px] bg-neutrals-300 my-4 md:hidden " />
        <h5 className="font-bold tracking-[.2px]">
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
          asesoría. 100% online.
        </h5>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-4 w-full grid grid-cols-1 gap-4"
        >
          <div className="w-full grid grid-cols-[40%_auto]">
            <Select
              name="typeDocument"
              options={[{ label: "DNI", value: "DNI" }]}
              sx={{
                borderTopLeftRadius: "8px",
                borderBottomLeftRadius: "8px",
                borderTopRightRadius: "0",
                borderBottomRightRadius: "0",
              }}
              control={control}
            />
            <Input
              name="document"
              type="number"
              label="Nro. de documento"
              variant="filled"
              sx={{
                "& .MuiFilledInput-root": {
                  borderTopLeftRadius: "0",
                  borderBottomLeftRadius: "0",
                  borderTopRightRadius: "8px",
                  borderBottomRightRadius: "8px",
                  backgroundColor: "transparent",
                  border: "1.4px solid #5E6488",
                  borderLeft: "none",
                },
              }}
              register={register}
            />
            <p className="text-start text-sm mt-1 text-red-500 pl-2 col-span-2">
              {errors?.document?.message}
            </p>
          </div>
          <Input
            label="Celular"
            name="mobile"
            type="number"
            variant="filled"
            isShowError
            register={register}
            errors={errors}
          />
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
          <Button disabled={isLoading} type="submit">
            {isLoading ? "Validando..." : "Cotiza aquí"}
          </Button>
        </form>
      </article>
    </span>
  );
};
