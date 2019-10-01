import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class ModernClass extends Component {
	state = {
		counter: 0
	}
	//No need to .bind(this)

	// handleClick = () => {
	// 	this.setState(prevState => ({
	// 			counter: ++prevState.counter,
	// 		}))
	// };

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

ReactDOM.render(<ModernClass />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();