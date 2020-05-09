import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WikiApp from './wikiapp';
import * as serviceWorker from './serviceWorker';

const express = require("express");

const app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

ReactDOM.render(
  <React.StrictMode>
    <WikiApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});