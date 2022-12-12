import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {register} from './serviceWorkerRegistration';

register();

const c = document.getElementById('root');
const root = createRoot(c);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals(console.log);

