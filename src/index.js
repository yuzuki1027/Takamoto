import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Intro from './Intro';
import Footer from './Footer';
import Business from './Business';
import Consept from './Consept';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Header/>

    <div class="mw-100 mh-100"><Consept/></div>
    <div class="container mw-100 mh-100 m-0">
    <div class="w-auto p-auto border example-row m-0"><Intro/></div>
    <div class="w-auto p-auto border example-row m-0"> <Business/></div>
    </div>

    <Footer />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
