import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { useValidateCredentials } from "@/hooks/useValidateCredentials";
import { registrationSchema } from "@/schemas/registrationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { TermsAndConditions } from "./TermsAndConditions";
import { Button } from "@/components/Button";

const initialValues = {
  typeDocument: "DNI",
  politics: false,
  comunications: false,
  document: "",
  mobile: ""
};

export const FormValidate = () => {
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

  const { isValidating, onSubmit } = useValidateCredentials({
    onError: () => setError("notValid", { type: "custom", message: "No existe el usuario" })
  })

  return (
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
      <TermsAndConditions register={register} errors={errors} />
      <Button disabled={isValidating} type="submit">
        {isValidating ? "Validando..." : "Cotiza aquí"}
      </Button>
    </form>
  );
};
