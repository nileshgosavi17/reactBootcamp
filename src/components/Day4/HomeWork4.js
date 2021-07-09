import React, { Component } from 'react';

class HomeWork4 extends Component {
	constructor(props) {
		super(props);
		this.state = { firstNum: '', secondNum: '', result: '' };
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.firstNum !== this.state.firstNum || prevState.secondNum !== this.state.secondNum) {
			this.setState({
				result: parseInt(this.state.firstNum, 10) * parseInt(this.state.secondNum, 10),
			});
		}
	}

	changeFirstNum = (event) => {
		this.setState({
			firstNum: event.target.value,
		});
	};

	changeSecondNum = (event) => {
		this.setState({
			secondNum: event.target.value,
		});
	};

	render() {
		return (
			<div>
				<label>
					First Number:
					<input type="number" value={this.state.firstNum} onChange={this.changeFirstNum} />
				</label>
				<label>
					Second Number:
					<input type="number" value={this.state.secondNum} onChange={this.changeSecondNum} />
				</label>
				<h3>result</h3>
				<h3>{!isNaN(this.state.result) && this.state.result}</h3>
			</div>
		);
	}
}

export default HomeWork4;
