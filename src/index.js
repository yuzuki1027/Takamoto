import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Intro from './Intro';
import Footer from "./Footer";
import Business from './Business';
import Office from './Office';
import Consept from './Consept';
import Campany from './Campany';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
// 日本語翻訳阻止
document.addEventListener('DOMContentLoaded', function() {
  var userLang = navigator.language || navigator.userLanguage;
  if (userLang === 'ja') {
      document.body.setAttribute('translate', 'no');
  }
});
root.render(
  <React.StrictMode>
    <Header/>
    <main>
      <Consept/>
      <Intro/>
      <hr className="featurette-divider" id="business"></hr>
      <Business/>
      <hr className="featurette-divider" id="office"></hr>
      <Office />
      <hr className="featurette-divider" id="company"></hr>
      <Campany />
      <hr className="featurette-divider"></hr>
    </main>
    <Footer />
  </React.StrictMode>
);
reportWebVitals();
