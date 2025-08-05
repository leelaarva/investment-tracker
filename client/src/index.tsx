import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // make sure this points to App, not Main
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
