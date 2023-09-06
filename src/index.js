import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './Components/App';
import {BrowserRouter as Router} from "react-router-dom"

import {ContextProvider} from "./Context"

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
     <ContextProvider>
        <Router>
            <App />
        </Router>
    </ContextProvider>
);
