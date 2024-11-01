import React, { Component } from 'react';

export default class StateExample extends Component {
	constructor(props) {
		super(props);

		this['state'] = {
			loading: true,
			formData: 'No Data'
		};
		//this['loading'] = true;
		//this['formData'] = 'No Data';
	}

	componentDidMount() {
		window.setTimeout(this.handleFormData.bind(this), 5000);
	}

	handleFormData() {
		this.setState({
			loading: false,
			formData: 'New Data' + this['state']['formData']
		});
		//this['loading'] = false;
		//this['formData'] = 'New Data' + this['formData'];

		//this.forceUpdate();
	}

	render() {
		return (
			<>
				<p>{String(this['state']['loading'])}</p>
				<p>{this['state']['formData']}</p>
				{/*<p>{String(this['loading'])}</p>
				<p>{this['formData']}</p>*/}
			</>
		);
	}
}
