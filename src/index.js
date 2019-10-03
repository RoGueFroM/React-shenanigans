import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from "prop-types";
import Table from "./Fragments and style/Fragments.js";
import './index.css';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Table />, document.getElementById('root'));
serviceWorker.unregister();
