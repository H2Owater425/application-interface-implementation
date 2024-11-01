import './App.css';
import React, { Component } from 'react';
import Header from './components/header';
import Navigation from './components/navigation';
import Article from './components/article';
import TodayPrice from './components/todayPrice';
import StateExample from './components/stateExample';
import LifeCycle from './components/lifeCycle';

export default class App extends Component {
	render() {
		return (
			<>
				<LifeCycle value={5} />
				<StateExample />
				<TodayPrice />
				<Header title="WWW" description="웹은 WWW(World Wide Web)을 부르는 말입니다" />
				<Header title="손민준" description="손민준" />
				<Navigation />
				<Article title="React" content="React는 무슨 뜻?" />
			</>
		);
	}
}