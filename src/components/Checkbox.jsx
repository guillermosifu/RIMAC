import PropTypes from "prop-types";
import { Checkbox as CheckboxBasic } from "@mui/material"

export const Checkbox = ({ label, register, errors, ...props }) => {
  const errorMessage = errors?.[props.name]?.message;
  
  return (
    <div className="flex items-center">
      <CheckboxBasic 
        sx={{
          color: "#000",
          '&.Mui-checked': {
            color: "#000",
          },
        }} 
        {...props} 
        {...register(props.name)}
      />
      <p className={`${errorMessage?.length > 0 && "text-red-500"}`}>{label}</p>
    </div>
  )
} 

Checkbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.object
}
