import React, { Component } from 'react';

export default class LifeCycle extends Component {
	constructor(props) {
		super(props);

		this['state'] = {
			value: 0
		};

		console.log('constructor');
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		if(nextState['value'] === 10) {
			return false;
		} else {
			return true;
		}
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	static getDerivedStateFromProps(props, state) {
		console.log('getDerivedStateFromProps ' + props['value'] + ' ' + state['value']);

		//if(props['value'] !== state['value']) {
		//	return {
		//		value: props['value']
		//	};
		//} else {
		//	return null;
		//}
		return null;
	}
	
	//setState(state) {
	//	super.setState(Object.assign(this['state'], state));

	//	return;
	//}

	addCount() {
		this.setState({
			value: this['state']['value'] + 1
		});

		//this.setState()

		//console.log(this['state']);

		return;
	}
	
	render() {
		console.log('render');

		return (
			<div>
				<h1>안녕하세요. 리엑트</h1>
				<p>props: {this['props']['value']}</p>
				<p>state: {this['state']['value']}</p>
{/*
				<p>count: {this['state']['count']}</p>
				<p>array: {this['state']['array'].join(',')}</p>*/}

				<button onClick={this.addCount.bind(this)}>add</button>
			</div>
		);
	}
}
