import { createMuiTheme, createPalette } from 'material-ui/styles';
import { grey, pink } from 'material-ui/colors';

const theme = createMuiTheme({
  palette: createPalette({
    primary: grey,
    accent: pink
  })
});

export default theme;