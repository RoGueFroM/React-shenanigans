import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import {Lesson, Counter} from "./Lesson PropTypes";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// PropTypes

// // Node:
// Component.propTypes = {
// 	node: PropTypes.node
// }

// // Element:
// Component.propTypes = {
// 	elem: PropTypes.element
// }

// // Instance of:
// Component.propTypes = {
// 	instance: PropTypes.instanceOf(Constructor)
// }

// // One of:
// Component.propTypes = {
// 	elem: PropTypes.oneOf(["var1", "var2"])
// }

// // One of type:
// Component.propTypes = {
// 	elem: PropTypes.oneOfType([
// 		PropTypes.string, 
// 		PropTypes.number
// 	])
// }

// // Array of / Object of:
// Component.propTypes = {
// 	array: PropTypes.arrayOf(PropTypes.string),
// 	object: PropTypes.objectOf(PropTypes.number)		
// }

// // Shape:
// Component.propTypes = {
// 	obj: PropTypes.shape({
// 		color: PropTypes.string,
// 		fontSize: PropTypes.number,
// 		lineHeight:	PropTypes.number
// 	})
// }

// ====================================================================================

ReactDOM.render(<Lesson> <Counter /> </Lesson>, document.getElementById('root'));
serviceWorker.unregister();
