/* eslint no-console: "off" */

import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import browserify from 'browserify';
import babelify from 'babelify';
import App from './components/App.jsx';

const app = express();
const port = 3000;

app.get('/bundle.js', (req, res) => {
  browserify('./client.js', { debug: true }).transform(babelify).bundle().pipe(res);
});

app.get('/', (req, res) => {
  const component = <App str='111111' />;
  const content = renderToString(component);

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>React SSR Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body>
        <div id="app-server">${content}</div>
        <div id="app-client"></div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `);
  console.info('react-grid-system example rendered server-side.');
});

app.listen(port, () => {
  console.info(`==>  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
});
