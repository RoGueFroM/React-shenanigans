import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

	const Counter = ({counter, func, number, string}) => {
		console.log(counter, func, number, string);
		return <h1>Counter component value: {counter}</h1>
	}

	Counter.propTypes = {
		counter: PropTypes.number.isRequired,
		func: PropTypes.func,
		number: PropTypes.number,
		string: PropTypes.string
	}

	Counter.defaultProps = {
		func: () => {},
		number: 0,
		string: ""
	}

	class CounterButton extends Component {
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
						<Counter counter={counter}
						func={() => {}}
						number={1}
						string="str"
						/>
						<button onClick={this.handleClick}>+1</button>
				</div>
			);
		}
	}

ReactDOM.render(<CounterButton />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();