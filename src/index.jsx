import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Appli from './composants/Appli';
import { BrowserRouter as Router} from 'react-router-dom';

const baseName = (window.location.href.search(/github\.io/i) !== -1) ? "/Portfolio" : "";
ReactDOM.render(
  <React.StrictMode >
    <Router basename= {baseName}>
    <Appli basename= {baseName}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('racine')
);
