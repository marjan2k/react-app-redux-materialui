import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { store } from "./store/RootStore";
import { Provider } from "react-redux";
import EntryComponent from './pages/PageContainer';
import { eBlockTheme } from './themes/eBlock';

// A theme with custom primary and secondary color.
// It's optional.


function rootComponent() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={eBlockTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <EntryComponent />
      </MuiThemeProvider>
    </Provider>
  );
}

export default rootComponent;
