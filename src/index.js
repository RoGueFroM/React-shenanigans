import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import App from "./Events/Events.js";
import './index.css';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
