import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from "prop-types";
import Form from "./Forms/Forms.js";
import './index.css';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Form />, document.getElementById('root'));
serviceWorker.unregister();