import React, { useState } from 'react';
import './App.scss';
import TouitAPI from './api/TouitAPI';
import Header from './components/Header';
import TouitContainer from './components/TouitContainer';
import Trending from './components/Trending';

/*
http://touiteur.cefim-formation.org/
http://touiteur.cefim-formation.org/list
http://touiteur.cefim-formation.org/list?ts=
http://touiteur.cefim-formation.org/send

http://touiteur.cefim-formation.org/likes/send
http://touiteur.cefim-formation.org/likes/top
http://touiteur.cefim-formation.org/likes/remove

http://touiteur.cefim-formation.org/comments/list?message_id=1
http://touiteur.cefim-formation.org/comments/send?message_id=1

http://touiteur.cefim-formation.org/influencers?count=3
http://touiteur.cefim-formation.org/trending
*/

function App() {
	const [listTouits, setListTouits] = useState(null);
	TouitAPI(setListTouits);
	return (
		<main className="App">
			<Header />
			<TouitContainer />
			<Trending />
			<h2>{listTouits ? listTouits.ts : "Not defined"}</h2>
		</main>
	);
}

export default App;
