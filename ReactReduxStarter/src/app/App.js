import React from 'react';
import { MuiThemeProvider, createMuiTheme, createPalette } from 'material-ui/styles';
import { blue, pink } from 'material-ui/colors';

import FilterableShotList from '../components/shot/FilterableShotList';

const App = () => {
  const theme = createMuiTheme({
    palette: createPalette({
      primary: blue,
      accent: pink
    })
  });

  return (
    <MuiThemeProvider theme={theme}>
      <FilterableShotList />
    </MuiThemeProvider>
  );
};

export default App;