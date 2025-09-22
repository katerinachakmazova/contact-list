import { createTheme } from '@mui/material';


export const BASE_URL = 'http://localhost:5000';
export const CONTACT_SLICE_NAME = 'contacts';
export const theme = createTheme({
  palette: {
    primary: {
      main: '#007ba7',
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
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#007ba7',
          '&:focus': {
            outline: 'none',
            boxShadow: 'none',
          }
          
        }
      }
    }
  },
});