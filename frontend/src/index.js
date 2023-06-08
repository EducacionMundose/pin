import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Help from './help/Help';
import reportWebVitals from './reportWebVitals';
import Info from './info/Info';
import Accordion from './accordion/Accordion';
import Hiring from './hiring/Hiring';
import Footer from './footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Help />
    <Info />
    <Accordion />
    <Hiring />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
