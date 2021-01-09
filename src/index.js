import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Spinner from './components/Spinner/Spinner';
import './translation/i18n';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />} >
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

