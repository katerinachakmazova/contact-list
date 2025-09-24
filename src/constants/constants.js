import { createTheme } from '@mui/material';

export const BASE_URL = 'http://localhost:5000';
export const CONTACT_SLICE_NAME = 'contacts';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#007ba7',
    },
    text: {
      primary: '#005371ff',
      secondary: '#02516eff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:focus': {
            outline: 'none',
            boxShadow: 'none',
          },
          fontSize: '14px',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#007ba7',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          margin: '7px',
          fontWeight: 'bold',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#007ba7',
          '&:focus': {
            outline: 'none',
            boxShadow: 'none',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            color: '#02516eff',
            fontWeight: 'bold',
          },
          '& .MuiInputLabel-root': {
            color: '#007ba7',
            fontSize: '18px',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#02516eff',
            fontWeight: 'bolder',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#007ba7',
            borderWidth: '1.5px',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#02516eff',
            borderWidth: '1.5px',
          },
        },
      },
    },
  },
});
