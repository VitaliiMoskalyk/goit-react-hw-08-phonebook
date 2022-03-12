import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store,persistor } from 'redux/store';
import Container from '@mui/material/Container';
import { App } from 'components/App';
import './index.css';


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