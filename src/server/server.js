import App from '../client/App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { Helmet } from 'react-helmet';
import { renderToString } from 'react-dom/server';
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
var path = require('path');
const apiRoutes = require('./api/router')
const publicFolder = process.env.NODE_ENV === 'production' ? path.join(__dirname, '../build/public') : 'public';
const server = express();
require('dotenv').config()


server
  .disable('x-powered-by')
  .use(express.static(publicFolder))
  .get('/', (req, res) => {
    res.redirect('/home')
  })
  .get(/^\/(?!api).*/, (req, res) => {
    const context = {};
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    );
    const html = `<!doctype html>
<html lang="">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta charset="utf-8" />
    <title>Welcome to Razzle</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${assets.client.css
        ? `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="${assets.client.css}">`
        : ''
      }
    ${process.env.NODE_ENV === 'production'
        ? `<script src="${assets.client.js}" defer></script>`
        : `<script src="${assets.client.js}" defer crossorigin></script>`
      }
</head>
<body>
    <div id="root">${markup}</div>
</body>
</html>`

    const helmet = Helmet.renderStatic();
    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(formatHTML(html, helmet));
    }


    function formatHTML(appStr, helmet) {
      return `
        <!DOCTYPE html>
        <html lang="en">
          <head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
          <meta http-equiv="cache-control" content="no-cache" />
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${assets.client.css
          ? `<link rel="stylesheet" href="${assets.client.css}">`
          : ''
        }
            ${process.env.NODE_ENV === 'production'
          ? `<script src="${assets.client.js}" defer></script>`
          : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
          </head>
          <body>
          <div id="root">${markup}</div>
            <script src="./bundle.js"></script>
          </body>
        </html>
      `
    }


  }).use('/api/sync', apiRoutes);

export default server;
