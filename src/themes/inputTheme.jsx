export const inputTheme = {
  '& .MuiFilledInput-root': {
    backgroundColor: "transparent",
    border: "1.4px solid #5E6488",
    borderRadius: "8px",
  },
  '& .MuiFilledInput-underline': {
    '&:after': {
      borderBottom: 'none', // Desactiva la línea de abajo después de enfocar el input
    },
    '&:before': {
      borderBottom: 'none', // Desactiva la línea de abajo antes de enfocar el input
    },
    '&:hover:before': {
      borderBottom: 'none', // Desactiva la línea de abajo al poner el cursor sobre el input
    },
  },
  '& .MuiInputLabel-root': {
    color: '#5E6488', // Cambia el color del label,
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#5E6488', // Cambia el color del label cuando está flotando (enfocado)
  },
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },

  '& .MuiFilledInput-root:hover': {
    backgroundColor: 'transparent',// Cambia el color de fondo al pasar el cursor sobre el input
  },
  '& .MuiFilledInput-underline:hover:before': {
    borderBottom: 'none !important', // Desactiva el borde inferior al pasar el cursor sobre el input
  },
  '& .MuiFilledInput-root.Mui-focused': {
    backgroundColor: 'transparent !important', // Desactiva el cambio de fondo al enfocar el input
  },

};
