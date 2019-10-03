import React, {Component} from "react";

class Form extends Component {
	render() {
		return (
			<form>
				{/*Input*/}
				<label>
					Name:
					<input type="text" />
				</label> 
				{/*Text area*/} <br />
				<label htmlFor="text"></label>
				<textarea id="text">Text:</textarea>
				{/*Button*/} <br />
				<button>Show</button>
			</form>
		)
	}
}

export default Form;