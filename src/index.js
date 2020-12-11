import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from './component/Button';
import Stateful from './component/Stateful';
import Stateless from './component/Statelees';



ReactDOM.render(
  <React.StrictMode>
    
      
      <Stateful></Stateful>
      <Stateless>
        
      </Stateless>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
