import * as Yup from "yup";

export const registrationSchema = Yup.object().shape({
  typeDocument: Yup.string().required("El tipo de documento es obligatorio."),
  document: Yup.string()
    .required("El documento es obligatorio.")
    .nullable()
    .typeError("El documento es obligatorio.")
    .min(8, "Mínimo 8 caracteres")
    .max(8, "Máximo 8 caracteres")
    .nullable(),
  mobile: Yup.string().required("El celular es obligatorio."),
  politics: Yup.boolean().oneOf([true]).required("El celular es obligatorio."),
  comunications: Yup.boolean()
    .oneOf([true])
    .required("El celular es obligatorio."),
});
