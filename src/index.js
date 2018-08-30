import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculadora from './main/Calculadora';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<div>
    <h1>Calculadora</h1>
    <Calculadora />
</div>
, document.getElementById('root'));
registerServiceWorker();
