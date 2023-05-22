 import React from 'react';
 import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./assets/css/ionicons.min.css";
import "./assets/css/linea-font.css";
import './App.css'
import './assets/scss/style.scss';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App  />);