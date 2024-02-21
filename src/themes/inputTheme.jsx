export const inputTheme = {
  "& .MuiFilledInput-root": {
    backgroundColor: "transparent",
    border: "1.4px solid #5E6488",
    borderRadius: "8px",
  },
  "& .MuiFilledInput-underline": {
    "&:after": {
      borderBottom: "none",
    },
    "&:before": {
      borderBottom: "none",
    },
    "&:hover:before": {
      borderBottom: "none",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#5E6488", 
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#5E6488",
  },
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },

  "& .MuiFilledInput-root:hover": {
    backgroundColor: "transparent",
  },
  "& .MuiFilledInput-underline:hover:before": {
    borderBottom: "none !important",
  },
  "& .MuiFilledInput-root.Mui-focused": {
    backgroundColor: "transparent !important",
  },
};
