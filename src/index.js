import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { FavoritesContextProvider } from './store/favorites-context';

ReactDOM.render(
  <FavoritesContextProvider>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </FavoritesContextProvider>,
  document.getElementById('root')
);