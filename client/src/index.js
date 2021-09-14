import React from 'react';
import ReactDOM from 'react-dom';
import jobSearch from './jobSearch';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
      <App />,
      </React.StrictMode>,
    document.getElementById('root'));
    export default function Indeed(url = 'http://api.indeed.com/', publisherId) {
    if (!publisherId) {
      throw Error('An Indeed publisher id is required');
    } else {
      return {
        jobSearch: () => new jobSearch(url, publisherId)
      };
    }
  }
