import PropTypes from 'prop-types'
// components
import { FormControl, FormControlLabel, Radio as RadioBasic } from "@mui/material";
// assets
import { RadioSuccess } from "@/assets/icons/RadioSuccess";

export const Radio = ({ className, ...props }) => (
  <FormControl>
    <FormControlLabel
      className={className}
      control={<RadioBasic color="primary" checkedIcon={<RadioSuccess />} />}
      {...props}
    />
  </FormControl>
);

Radio.propTypes = {
  className: PropTypes.string
}