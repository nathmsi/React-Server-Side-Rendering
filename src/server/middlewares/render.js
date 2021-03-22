import renderer from '../../helpers/renderer';
import creactStore from '../../helpers/createStore';

import { matchRoutes } from 'react-router-config';
import Routes from '../../client/Routes';

const express = require('express');
const renderRouter = express.Router();

renderRouter.use(express.static('public'));


renderRouter.get('*', (req, res) => {
    const store = creactStore(req);
  
    // some logic to initialize and load into the store
    const promises = matchRoutes(Routes, req.path)
      .map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
      })
      .map(promise => {
        if (promise) {
          return new Promise((resolve, reject) => {
            promise.then(resolve).catch(resolve);
          });
        }
      });
  
    Promise.all(promises).then(() => {
      const context = {};
      const content = renderer(req, store, context);
  
      if (context.url) {
        return res.redirect(301, context.url);
      }
      if (context.notFound) {
        res.status(404);
      }
  
      res.send(content);
    });
  
  });

export default renderRouter;