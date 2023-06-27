import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {StoreContext} from "./store/context";
import {I18nProvider} from "./i18n/context";
import App from './App/App';
import './index.scss';
import Store from "./store";

const store = new Store();

const root = createRoot(document.getElementById('root'));

root.render(
  <StoreContext.Provider value={store}>
    <I18nProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </I18nProvider>
  </StoreContext.Provider>
);
