import {createMuiTheme, createPalette} from 'material-ui/styles';
import { deepOrange, red, orange } from 'material-ui/colors';

const theme = createMuiTheme({
  palette: createPalette({
    primary: red,
    accent: orange
  })
});

theme.palette.text.primary = '#f50057';
theme.palette.input.bottomLine = 'rgba(0, 0, 0, 0.1)';
theme.palette.input.helperText = red['500'];

export default theme;