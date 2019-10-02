import React, {Component} from "react";

const ValidationMsg = ({ val }) => {}

const App = () => {
	const val = 9;
	return (
		<div>
			{val >= 10 ? <h2>Grate than 10</h2> : <h3>Less than <em>10</em></h3>}
			{val && <span>We have {val}</span>}
		</div>
	);
}

export default App;
