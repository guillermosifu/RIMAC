import PropTypes from "prop-types";
import { Button as ButtonBasic } from "@mui/material";

export const Button = ({ children, sx, ...props }) => (
  <ButtonBasic
    sx={{
      backgroundColor: "#000",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#000",
        color: "#fff",
      },
      width: "max-content",
      borderRadius: "40px",
      padding: "20px 40px",
      ":disabled": {
        color: "#fff",
        opacity: "50%",
      },
      ...sx,
    }}
    {...props}
  >
    {children}
  </ButtonBasic>
);

Button.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};
