import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import './index.css';
import Container from '@mui/material/Container';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Container fixed>
          <App />
          </Container>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);