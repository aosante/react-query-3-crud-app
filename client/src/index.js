import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider, QueryClient } from 'react-query';
import preset from '@rebass/preset';
import reportWebVitals from './reportWebVitals';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={preset}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
