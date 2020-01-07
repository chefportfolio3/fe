import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CssBaseline} from '@material-ui/core'
import {StylesProvider} from '@material-ui/core/styles'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <StylesProvider injectFirst>
      <CssBaseline />
      <App />
    </StylesProvider>
  </Router>,
  document.getElementById("root")
);
