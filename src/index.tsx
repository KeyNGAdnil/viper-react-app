import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routerConfig from './router/index';
import './global.less';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {routerConfig.routes.map((route) => {
          return (
            <Route key={route.path} {...route} element={<route.element />} />
          );
        })}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
