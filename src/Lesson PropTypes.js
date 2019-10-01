import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

export const Counter = ({counter = 0}) => {
	// console.log(counter, func, number, string);
	return <h1>Counter component value: {counter}</h1>
}

// Counter.propTypes = {
// 	counter: PropTypes.number.isRequired,
// 	func: PropTypes.func,
// 	number: PropTypes.number,
// 	string: PropTypes.string
// }

// Counter.defaultProps = {
// 	func: () => {},
// 	number: 0,
// 	string: ""
// }

export class Lesson extends Component {
	
	static propTypes = {
		children: PropTypes.element
	}
	
	static defaultProps = {
		children: null
	}

	state = {
		counter: 0,
	}

	handleClick = () => {
		this.setState(({counter}) => ({
				counter: ++counter,
			}))
	};

	render() {
		const {counter} = this.state;
		return	(
			<div>
					<div>{counter}</div>
					<button onClick={this.handleClick}>+1</button>
			</div>
		);
	}
}