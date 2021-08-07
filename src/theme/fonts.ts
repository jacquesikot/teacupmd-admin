import { extendTheme } from '@chakra-ui/react';
const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  colors: {
    brandPurple: {
      100: '#DAD8E8',
      200: '#B5B1D2',
      300: '#918BBB',
      400: '#6C64A5',
      500: '#473D8E',
      600: '#352E6B',
      700: '#241F47',
      800: '#120F24',
      900: '#0E0C1C',
    },
  },
});
export default theme;
