import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App';
import './index.scss';

ReactDOM.render(
    <BrowserRouter>
        <StyledEngineProvider injectFirst>
            <App />
        </StyledEngineProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
