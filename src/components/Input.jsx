import PropTypes from "prop-types";
// components
import { TextField } from "@mui/material";
// themes
import { inputTheme } from "@/themes/inputTheme";

export function Input({ sx, register, isShowError, errors, ...props }) {
  const errorMessage = errors?.[props.name]?.message;
  
  return (
    <div className="w-full">
      <TextField
        fullWidth
        sx={{ ...inputTheme, ...sx }}
        variant="filled"
        {...props}
        {...register(props.name)}
      />
      {isShowError && errorMessage?.length > 0 && (
        <p className="text-start text-sm mt-1 text-red-500 pl-2">
          {errorMessage}
        </p>
      )}
    </div>
  );
}

Input.propTypes = {
  sx: PropTypes.object,
  name: PropTypes.string,
  register: PropTypes.any,
  isShowError: PropTypes.bool,
  errors: PropTypes.object
};
