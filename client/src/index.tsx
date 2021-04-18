import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import merge from "lodash.merge";
import 'antd/dist/antd.css';
import './styles/theme.scss';
import './styles/index.scss';
import './styles/layout.scss'
import './styles/form.scss';
import './styles/overrides.scss';

import {defaults} from 'react-chartjs-2';

// merge(defaults, {
//   global: {
//     line: {
//       fill: false
//     }
//   }
// })

// defaults.global.datasets.line.fill = false;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
