//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import ProfileSub1 from './pages/ProfileSub1';
import Web from './pages/Web';
import NavLink from './pages/NavLink';
import Login from './pages/Login';

export default function App() {

	
	const isLogin = false;
	
	return (
		<BrowserRouter>
			<NavLink />
			<Routes>
				<Route path="/noLogin" element={isLogin ? <Navigate replace to="/" /> : <Login />} />
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/profile/:id" element={<Profile />} />
				<Route path="/profile/profileSub1" element={<ProfileSub1 />} />
				<Route path="/web/*" element={<Web />} />
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
  //return (
  //  <div className="App">
  //    <header className="App-header">
  //      <img src={logo} className="App-logo" alt="logo" />
  //      <p>
  //        Edit <code>src/App.js</code> and save to reload.
  //      </p>
  //      <a
  //        className="App-link"
  //        href="https://reactjs.org"
  //        target="_blank"
  //        rel="noopener noreferrer"
  //      >
  //        Learn React
  //      </a>
  //    </header>
  //  </div>
  //);
}
