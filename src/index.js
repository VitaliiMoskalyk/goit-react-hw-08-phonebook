import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import { store,persistor } from 'redux/store';
import './index.css';
import Container from '@mui/material/Container';

ReactDOM.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
      
      <Provider store={store}>
        <Container fixed>
          <App />
        </Container>
        </Provider>
        
      </BrowserRouter>
      </PersistGate>
  </React.StrictMode>,
  document.getElementById('root')
);