import React, { useState } from 'react';
import './App.scss';
import TouitAPI from './api/TouitAPI';
import Header from './components/Header';

function App() {
	const [listTouits, setListTouits] = useState(null);
	const getJson = jsonStr => {
		setListTouits(JSON.parse(jsonStr));
	}

	return (
		<main className="App">
			<TouitAPI getJson={getJson} />
			<Header />
			<h2>{listTouits ? listTouits.Toto : "Not defined"}</h2>
		</main>
	);
}

export default App;
