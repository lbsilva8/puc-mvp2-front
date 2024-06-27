/* Codigo base para inicialização do react*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Cria a raiz do aplicativo React e a vincula ao elemento DOM com o id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente App dentro do React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
