import React, {Component} from "react";

class Form extends Component {
	state = {
		inputText: "",
		textareaText: ''
	}

	handleInputChange = ({ target: {value}}) => {
		this.setState({
			inputText: value,
		})
	}

	handleTextareaChange = ({ target: {value}}) => {
		this.setState({
			textareaText: value,
		})
	}

	render() {
		const {inputText, textareaText} = this.state;
		return (
			<form>
				{/*Input*/}
				<label>
					Name:
					<input type="text" name="name" value={inputText} onChange={this.handleInputChange}/>
				</label> 
				{/*Text area*/} <br />
				<label htmlFor="text">Text:</label>
				<textarea id="text" value={textareaText} onChange={this.handleTextareaChange}/>
				{/*Button*/} <br />
				<button>Show</button>
			</form>
		)
	}
}

export default Form;