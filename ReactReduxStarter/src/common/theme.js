import { createMuiTheme, createPalette } from 'material-ui/styles';
import { grey, pink } from 'material-ui/colors';

const theme = createMuiTheme({
  palette: createPalette({
    primary: grey,
    accent: pink
  }),
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: pink[500],
        color: 'white',
        '&:hover': {
          backgroundColor: pink[500]
        }
      }
    }
  }
});

export default theme;