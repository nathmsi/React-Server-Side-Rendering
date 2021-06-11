import React from 'react';
import { createStore } from 'redux';
import reducers from '../../client/reducers';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import Routes from '../../client/Routes'

import { Helmet } from 'react-helmet';

const express = require('express');
const renderRouter = express.Router();

renderRouter.use(express.static('public'));

const renderer = (req, store, context) => {
  const content = renderToString(
      <Provider store={store}>
          <StaticRouter location={req.path} context={context}>
              <div>{renderRoutes(Routes)}</div>
          </StaticRouter>
      </Provider>
  );

  const helmet = Helmet.renderStatic();

  return `
  <html>
      <head>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
      </head>
      <body>
          <div id="root">${content}</div>
          <script>
              window.INITIAL_STATE=${serialize((store.getState()))}
          </script>
          <script src="bundle.js"> </script>
      </body>
  </html>
  `;
}

renderRouter.get('*', (req, res) => {
    const store = createStore(
      reducers,
      {}
    );
  
    const context = {};
    const content = renderer(req, store, context);
  
    res.send(content);
  });

export default renderRouter;