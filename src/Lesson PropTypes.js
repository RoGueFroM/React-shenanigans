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

export const Button = () => (
	<button>Simple button</button>
)


export class Lesson extends Component {
	static propTypes = {
		children: PropTypes.element,
	}
	
	static defaultProps = {
		children: null,
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
		const {children, child} = this.props;
		return	(
			<div>
					{child}
					<div>{counter}</div>
					{React.cloneElement(children, {counter: this.state.counter} )} 
					<button onClick={this.handleClick}>+1</button>
			</div>
		);
	}
}

 // ^ nasty React.cloneElement to get props from parrent