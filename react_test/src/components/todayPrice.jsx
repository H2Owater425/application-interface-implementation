import React, { Component } from 'react';

export default class TodayPrice extends Component {
	parse(query) {
		const splitQueries = query.slice(1).split('&');
		const result = {};

		for(let i = 0; i < splitQueries['length']; i++) {
			const _query = splitQueries[i].split('=');

			result[_query[0]] = _query[1];
		}

		return result;
	}
	
	render() {
		console.log(this)
		return (
			<div>{JSON.stringify(this.parse('?banana=20&apple=30&orange=10000'))}</div>
		);
	}
}
