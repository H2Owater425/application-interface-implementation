import { Component } from 'react';

export default class Example1 extends Component {
	constructor(props) {
		super(props);

		this['state'] = {
			count: 0
		};
	}
	
	click() {
		this.setState({
			count: this['state']['count'] + 1
		});

		return;
	}

	render() {
		return <div>
			<p>Count: {this['state']['count']}</p>
			<button onClick={this.click.bind(this)}>Click Me!</button>
		</div>;
	}
}