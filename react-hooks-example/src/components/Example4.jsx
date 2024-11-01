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

	componentDidMount() {
		console.log('componentDidMount: ' + this['state']['count']);

		return;
	}

	componentDidUpdate() {
		console.log('componentDidUpdate: ' + this['state']['count']);

		return;
	}

	render() {
		return <div>
			<p>Click {this['state']['count']}</p>
			<button onClick={this.click.bind(this)}>CCCCCCCCbal</button>
		</div>;
	}
}