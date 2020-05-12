import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import amber from "@material-ui/core/colors/amber";
import {hexToRgb} from "./tools/tools";

export let theme = createMuiTheme({

  palette: {
    primary: blue,
    secondary: {
      main: '#FF7B78',
    },
  },

  shadows: [
    "none",
    "0 4px 30px 0 rgba(" +
      hexToRgb(blue[400]) +
    ",.08), 0 7px 40px 0 rgba(" +
      hexToRgb(blue[600]) +
    ",.08)"],

  overrides: {
    MuiExpansionPanel: {
      root: {
        '&:before': {
          display: 'none'
        },
      },
    },
  },

  typography: {
    fontFamily: [
      'Jost',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },

});

theme = responsiveFontSizes(theme);