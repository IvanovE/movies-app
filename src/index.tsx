import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Slide, ToastContainer } from 'react-toastify';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { App } from './App';
import { theme } from './theme/theme';
import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
    <ToastContainer
      position='top-right'
      transition={Slide}
      autoClose={2000}
      draggable
    />
  </>
);

reportWebVitals();
