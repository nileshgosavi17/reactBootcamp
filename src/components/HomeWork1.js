import React, { Component } from 'react';

class HomeWork1 extends Component {
	constructor(props) {
		super(props);

		this.state = {
			a: 111,
			b: 555,
			c: {
				c1: 123,
				c2: 456,
				c3: 789,
				c4: 890,
			},
		};
	}
	changeValue = () => {
		this.setState((prev) => ({
			a: 999,
			c: {
				...prev.c,
				c2: 654,
				c4: 980,
			},
		}));
	};

	componentDidMount() {
		console.log(this.state);
	}

	componentDidUpdate() {
		console.log(this.state);
	}
	render() {
		return (
			<div>
				<h1>{this.state.a}</h1>
				<h1>{this.state.b}</h1>
				<h1>{this.state.c.c1}</h1>
				<h1>{this.state.c.c2}</h1>
				<h1>{this.state.c.c3}</h1>
				<h1>{this.state.c.c4}</h1>
				<button onClick={this.changeValue}>Click me to change value</button>
			</div>
		);
	}
}

export default HomeWork1;
