import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';

const App = () => {
	return (
		<div className="app">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
			</Routes>
		</div>
	);
};

export default App;
