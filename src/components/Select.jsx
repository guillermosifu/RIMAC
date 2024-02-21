import PropTypes from 'prop-types'
import { useController } from 'react-hook-form';
// components
import { MenuItem, Select as SelectField } from "@mui/material";

export const Select = ({ sx, options, name, control, ...props }) => {
  const { field } = useController({ name: name, control });
  const { value, onChange, ...restField } = field;

  return (
    <SelectField
      value={value}
      onChange={(option) => {onChange(option ? option.target.value : option)}}
      sx={{
        color: "#000",
        border: "1px solid #5E6488",
        outline: "none",
        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          border: "none",
          outline: "none",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
          outline: "none",
          // borderColor: "gray",
          "& :hover": {
            borderColor: "none",
          },
        },
        ...sx
      }}
      {...props}
      {...restField}
    >
      {options && options.length > 0 && options.map(({ label, value }, index) => (
        <MenuItem key={index} value={value}>{label}</MenuItem>
      ))}
    </SelectField>
  )
};

Select.propTypes = {
  sx: PropTypes.object,
  options: PropTypes.array,
  name: PropTypes.string,
  control: PropTypes.any
}