import { createMuiTheme } from '@material-ui/core/styles';


export const eBlockTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#1abb99',
      dark: '#e66d64'
    },
    secondary: {
      main: '#24292f',
    },
  },
  typography: {
    useNextVariants: true,
    h6: {
      fontFamily: 'ProximaNova Semibold',
      color: '#7c7f82',
      fontSize: '17px',
    },
    body1: {
      fontFamily: 'ProximaNova Semibold',
      color: '#1abb99',
      fontSize: '17px',
    },
    body2: {
      fontFamily: 'ProximaNova Semibold',
      color: '#24292f',
      fontSize: '17px',
    },
    caption: {
      fontFamily: 'ProximaNova Regular',
      color: '#bdc1c2',
      fontSize: '17px',
    },
    subtitle1: {
      fontFamily: 'ProximaNova Regular',
      color: '#f6c988',
      fontSize: '17px',
    }
  },
  overrides: {
    MuiDivider: {
      root: {
        height: 2,
        backgroundColor: '#edeeef',
      }
    }
  }
});
